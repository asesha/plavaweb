import test from "node:test";
import assert from "node:assert/strict";
import { createServer, handle, health } from "../src/app.js";

function invoke(method, url) {
  return new Promise((resolve) => {
    let status = 200;
    const req = { method, url, on(_event, cb) { if (_event === "end") cb(); return req; } };
    handle(req, {
      setHeader() {},
      writeHead(code) { status = code; },
      end(data) {
        let body = data;
        try { body = data ? JSON.parse(String(data)) : null; } catch { body = String(data ?? ""); }
        resolve({ status, body });
      },
    });
  });
}

test("health export and http health match", async () => {
  assert.equal(health().status, "ok");
  const res = await invoke("GET", "/health");
  assert.equal(res.status, 200);
  assert.equal(res.body.status, "ok");
  assert.ok(createServer());
});
