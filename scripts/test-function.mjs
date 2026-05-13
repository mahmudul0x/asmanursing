import { handler } from "../netlify/functions/ssr/index.mjs";

const event = {
  path: "/",
  rawQuery: "",
  httpMethod: "GET",
  headers: { host: "localhost", accept: "text/html" },
  body: null,
  isBase64Encoded: false,
};

const result = await handler(event, {});
console.log("Status:", result.statusCode);
console.log("Body starts with:", result.body?.slice(0, 80));
