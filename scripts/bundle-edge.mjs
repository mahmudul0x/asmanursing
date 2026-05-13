// Bundles dist/server/server.js into a self-contained Netlify Function
import { build } from "esbuild";
import { mkdirSync, readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const entry = join(root, "dist/server/server.js");
const outdir = join(root, "netlify/functions");

mkdirSync(outdir, { recursive: true });

await build({
  entryPoints: [entry],
  outfile: join(outdir, "server.mjs"),
  bundle: true,
  format: "esm",
  platform: "node",
  target: "node20",
  // Externalize node built-ins — they are available at runtime
  external: [
    "node:*",
    "async_hooks",
    "stream",
    "crypto",
    "buffer",
    "util",
    "events",
    "path",
    "fs",
    "url",
    "os",
    "net",
    "http",
    "https",
    "zlib",
  ],
  minify: false,
  logLevel: "info",
});

// Append the Netlify Function handler that adapts Web Fetch API → Lambda format
const wrapper = `
// Netlify Function handler: adapts AWS Lambda event → Web Fetch API → Lambda response
export const handler = async (event, context) => {
  const url = new URL(
    event.path + (event.rawQuery ? "?" + event.rawQuery : ""),
    "http://localhost"
  );

  const headers = new Headers(event.headers ?? {});
  const method = event.httpMethod;
  const body =
    event.body && method !== "GET" && method !== "HEAD"
      ? event.isBase64Encoded
        ? Buffer.from(event.body, "base64")
        : event.body
      : undefined;

  const request = new Request(url.toString(), { method, headers, body });

  const response = await server.fetch(request, {}, {});

  const responseHeaders = {};
  response.headers.forEach((value, key) => {
    responseHeaders[key] = value;
  });

  const responseBody = await response.text();

  return {
    statusCode: response.status,
    headers: responseHeaders,
    body: responseBody,
  };
};
`;

const outfile = join(outdir, "server.mjs");
const existing = readFileSync(outfile, "utf8");
writeFileSync(outfile, existing + wrapper);

console.log("Netlify Function bundled →", outfile);
