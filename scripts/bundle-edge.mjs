// Bundles dist/server/server.js + all its chunks into a single self-contained
// Netlify Edge Function file at netlify/edge-functions/ssr.js
import { build } from "esbuild";
import { mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const entry = join(root, "dist/server/server.js");
const outfile = join(root, "netlify/edge-functions/ssr.js");

mkdirSync(dirname(outfile), { recursive: true });

await build({
  entryPoints: [entry],
  outfile,
  bundle: true,
  format: "esm",
  platform: "browser", // Edge runtime = browser-like (Deno)
  target: "es2022",
  // Append the Netlify edge function export and config after the bundle
  footer: {
    js: `
export default server.fetch;
export const config = { path: "/*" };
`,
  },
  // server.js already exports 'server' as default — rename to avoid conflict
  // We re-export server.fetch as the edge handler
  define: {},
  minify: false,
  logLevel: "info",
});

console.log("Edge function bundled →", outfile);
