// Bundles dist/server into a single Netlify Function directory.
// Strategy: copy the server files as-is and generate a thin handler shim,
// because the server chunks use CJS/ESM mixed modules that break when
// re-bundled (react-dom/server uses dynamic require internally).
import { mkdirSync, cpSync, writeFileSync, readdirSync, rmSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const serverDir = join(root, "dist/server");
const outdir = join(root, "netlify/functions/ssr");

// Clean and recreate output dir
rmSync(outdir, { recursive: true, force: true });
mkdirSync(outdir, { recursive: true });

// Copy the entire dist/server into netlify/functions/ssr/
cpSync(serverDir, outdir, { recursive: true });

// Write a thin CJS handler shim that imports the server and adapts it
// Netlify Functions support ESM via .mjs extension
const handler = `
import server from "./server.js";

export const handler = async (event) => {
  const base = "https://" + (event.headers?.host ?? "localhost");
  const path = event.path ?? "/";
  const qs = event.rawQuery ? "?" + event.rawQuery : "";
  const url = base + path + qs;

  const method = event.httpMethod ?? "GET";
  const headers = new Headers(event.headers ?? {});

  let body = undefined;
  if (event.body && method !== "GET" && method !== "HEAD") {
    body = event.isBase64Encoded
      ? Buffer.from(event.body, "base64")
      : event.body;
  }

  const request = new Request(url, { method, headers, body });

  let response;
  try {
    response = await server.fetch(request, {}, {});
  } catch (err) {
    console.error("SSR handler error:", err);
    return { statusCode: 500, body: "Internal Server Error" };
  }

  const responseHeaders = {};
  response.headers.forEach((v, k) => { responseHeaders[k] = v; });

  const responseBody = await response.text();

  return {
    statusCode: response.status,
    headers: responseHeaders,
    body: responseBody,
  };
};
`;

// Netlify uses the folder name as function name and looks for index.mjs as entry
writeFileSync(join(outdir, "index.mjs"), handler.trimStart());
console.log("Netlify Function written →", outdir);
console.log("Files:", readdirSync(outdir).join(", "));
