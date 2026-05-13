// Netlify Edge Function: forwards all requests to TanStack Start SSR server
import server from "../../dist/server/server.js";

export default server.fetch;

export const config = {
  path: "/*",
  excludedPath: [
    "/assets/*",
    "/favicon*",
    "/robots.txt",
    "/site.webmanifest",
  ],
};
