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
