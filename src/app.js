import http from "node:http";
import { fileURLToPath } from "node:url";
import path from "node:path";

export function health() {
  return { status: "ok" };
}

export function handle(req, res) {
  const pathName = new URL(req.url || "/", "http://localhost").pathname;
  if (req.method === "GET" && (pathName === "/health" || pathName === "/")) {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(health()));
    return;
  }
  res.writeHead(404, { "content-type": "application/json" });
  res.end(JSON.stringify({ error: "not found" }));
}

export function createServer() {
  return http.createServer(handle);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  createServer().listen(Number(process.env.PORT || 3000));
}
