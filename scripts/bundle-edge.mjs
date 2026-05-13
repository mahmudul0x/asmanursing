import { build } from "esbuild";
import { mkdirSync, writeFileSync, rmSync, readFileSync, unlinkSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outdir = join(root, "netlify/functions/ssr");

rmSync(outdir, { recursive: true, force: true });
mkdirSync(outdir, { recursive: true });

// Write a temp entry that wires server.fetch → Lambda exports.handler
// Everything in one file so Netlify Lambda has no missing dependency
const entryFile = join(root, "scripts", "_entry.mjs");
writeFileSync(entryFile, `
import server from "${join(root, "dist/server/server.js").replace(/\\/g, "/")}";

export const handler = async (event) => {
  const base = "https://" + (event.headers?.host ?? "localhost");
  const url = base + (event.path ?? "/") + (event.rawQuery ? "?" + event.rawQuery : "");
  const method = event.httpMethod ?? "GET";
  const headers = new Headers(event.headers ?? {});
  const body = event.body && method !== "GET" && method !== "HEAD"
    ? (event.isBase64Encoded ? Buffer.from(event.body, "base64") : event.body)
    : undefined;
  let response;
  try {
    response = await server.fetch(new Request(url, { method, headers, body }), {}, {});
  } catch (err) {
    console.error("SSR error:", err);
    return { statusCode: 500, body: "Internal Server Error" };
  }
  const resHeaders = {};
  response.headers.forEach((v, k) => { resHeaders[k] = v; });
  return { statusCode: response.status, headers: resHeaders, body: await response.text() };
};
`);

// Bundle everything into a SINGLE index.cjs — no external files needed
await build({
  entryPoints: [entryFile],
  outfile: join(outdir, "index.cjs"),
  bundle: true,
  format: "cjs",
  platform: "node",
  target: "node20",
  // Only externalize true Node.js built-ins (available in Lambda runtime)
  external: [
    "node:async_hooks", "node:stream", "node:stream/web", "node:crypto",
    "node:buffer", "node:util", "node:events", "node:path", "node:fs",
    "node:url", "node:os", "node:net", "node:http", "node:https",
    "node:zlib", "node:string_decoder", "node:querystring", "node:assert",
    "node:tty", "node:worker_threads", "node:perf_hooks",
    // bare versions too
    "async_hooks", "stream", "crypto", "buffer", "util", "events",
    "path", "fs", "url", "os", "net", "http", "https", "zlib",
    "string_decoder", "querystring", "assert", "tty", "worker_threads",
  ],
  minify: false,
  logLevel: "error",
});

unlinkSync(entryFile);
console.log("Netlify Function bundled → netlify/functions/ssr/index.cjs");
