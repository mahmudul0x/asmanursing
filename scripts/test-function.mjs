import { handler } from "../netlify/functions/ssr/handler.mjs";

const event = {
  path: "/",
  rawQuery: "",
  httpMethod: "GET",
  headers: { host: "localhost", accept: "text/html" },
  body: null,
  isBase64Encoded: false,
};

try {
  const result = await handler(event, {});
  console.log("Status:", result.statusCode);
  console.log("Content-Type:", result.headers?.["content-type"]);
  console.log("Body (first 300 chars):\n", result.body?.slice(0, 300));
} catch (err) {
  console.error("HANDLER ERROR:", err);
}
