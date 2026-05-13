import { createRequire } from "module";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const fnPath = join(__dirname, "../netlify/functions/ssr/index.cjs");
const require = createRequire(fnPath);
const { handler } = require(fnPath);

console.log("handler type:", typeof handler);
const result = await handler({
  path: "/",
  rawQuery: "",
  httpMethod: "GET",
  headers: { host: "localhost" },
  body: null,
  isBase64Encoded: false,
});
console.log("Status:", result.statusCode);
console.log("Body:", result.body?.slice(0, 80));
