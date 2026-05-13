import { build } from "esbuild";
import { mkdirSync, writeFileSync, rmSync, readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outdir = join(root, "netlify/functions/ssr");

rmSync(outdir, { recursive: true, force: true });
mkdirSync(outdir, { recursive: true });

// Step 1: bundle the ESM server into a CJS IIFE that exposes server via global
const entryFile = join(root, "scripts", "_entry.mjs");
writeFileSync(entryFile, `
import server from "${join(root, "dist/server/server.js").replace(/\\/g, "/")}";
// Expose server on global so the outer CJS wrapper can access it
globalThis.__ssrServer = server;
`);

await build({
  entryPoints: [entryFile],
  outfile: join(outdir, "_bundle.cjs"),
  bundle: true,
  format: "cjs",
  platform: "node",
  target: "node20",
  external: [
    "node:*", "async_hooks", "stream", "crypto", "buffer", "util",
    "events", "path", "fs", "url", "os", "net", "http", "https", "zlib",
    "string_decoder", "querystring", "assert", "tty", "worker_threads",
  ],
  minify: false,
  logLevel: "error",
});

import { unlinkSync } from "fs";
unlinkSync(entryFile);

// Step 2: write a pure CJS index.js that requires the bundle then exports handler
const indexJs = `"use strict";
// Load the bundled SSR server (sets globalThis.__ssrServer)
require("./_bundle.cjs");

exports.handler = async function(event) {
  const server = globalThis.__ssrServer;
  const base = "https://" + ((event.headers && event.headers.host) || "localhost");
  const url = base + (event.path || "/") + (event.rawQuery ? "?" + event.rawQuery : "");
  const method = event.httpMethod || "GET";
  const headers = new Headers(event.headers || {});
  const body = (event.body && method !== "GET" && method !== "HEAD")
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
  response.headers.forEach(function(v, k) { resHeaders[k] = v; });
  return {
    statusCode: response.status,
    headers: resHeaders,
    body: await response.text(),
  };
};
`;

// Use .cjs extension so Node ignores root package.json "type":"module"
writeFileSync(join(outdir, "index.cjs"), indexJs);
console.log("Netlify Function bundled → netlify/functions/ssr/");
