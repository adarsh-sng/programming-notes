## 2. EXPRESS res — the features you'll use 80% of the time

| Method                    | Description                                      |
| ------------------------- | ------------------------------------------------ |
| `res.status(code)`        | Set HTTP status: `res.status(404)`               |
| `res.json(data)`          | Send JSON response                               |
| `res.send(data)`          | Send raw data (string, buffer)                   |
| `res.set(header, value)`  | Set response header                              |
| `res.cookie(name, value)` | Set cookies (if cookie parser + express-session) |
| `res.clearCookie(name)`   | Remove cookie                                    |
| `res.redirect(url)`       | Redirect user                                    |
| `res.end()`               | Manually end response (rare but used in streams) |

---

## 4. Compulsory Response Headers (server → client)

These are headers your backend sends automatically or must send.

| Header              | Description                                                        |
| ------------------- | ------------------------------------------------------------------ |
| `Content-Type`      | `application/json`, `text/html`, etc.                              |
| `Content-Length`    | Length of the outgoing body (added automatically unless streaming) |
| `Date`              | Server timestamp (auto)                                            |
| `Connection`        | Keep-alive or close                                                |
| `Transfer-Encoding` | Chunked for streaming — sent if content length unknown             |

> 🎯 These are fundamental HTTP headers returned by all servers.



---

## 6. Useful Optional Response Headers (server → client)

These help with security, caching, performance, and CORS.

| Header                             | Description                                  |
| ---------------------------------- | -------------------------------------------- |
| `Access-Control-Allow-Origin`      | CORS — allow specific domains                |
| `Access-Control-Allow-Headers`     | Which headers the client may send            |
| `Access-Control-Allow-Credentials` | Allow cookies with CORS                      |
| `Access-Control-Allow-Methods`     | Allowed HTTP methods                         |
| `Set-Cookie`                       | Send cookies/tokens                          |
| `Cache-Control`                    | Control caching: `no-store`, `max-age`, etc. |
| `ETag`                             | Browser revalidation for caching             |
| `Content-Disposition`              | File download handling                       |
| `Strict-Transport-Security` (HSTS) | Force HTTPS                                  |
| `X-Frame-Options`                  | Prevent clickjacking                         |
| `X-Content-Type-Options`           | Prevent MIME sniffing                        |
