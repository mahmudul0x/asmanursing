"use strict";
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
