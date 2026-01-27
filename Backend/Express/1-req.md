# EXPRESS req — the features you'll use 80% of the time

| Property          | Description                                                         |
| ----------------- | ------------------------------------------------------------------- |
| `req.body`        | Parsed body (JSON, form-data, etc.)                                 |
| `req.params`      | URL parameters: `/users/:id` → `req.params.id`                      |
| `req.query`       | Query params: `?page=2&limit=10` → `req.query.page`                 |
| `req.headers`     | All request headers, lowercase keys: `req.headers['authorization']` |
| `req.method`      | `"GET"`, `"POST"`, `"PUT"`, etc.                                    |
| `req.originalUrl` | Full URL that hit the server                                        |
| `req.path`        | Route path without query string                                     |
| `req.ip`          | Client IP                                                           |
| `req.cookies`     | User cookies (if cookie-parser)                                     |

---

# Compulsory Request Headers (client → server)

These are headers almost EVERY request sends.

| Header            | Description                                         | Example                                      |
| ----------------- | --------------------------------------------------- | -------------------------------------------- |
| `Host`            | Domain being requested (required by HTTP/1.1)       | `Host: api.example.com`                      |
| `User-Agent`      | Identifies browser/app (Chrome, Safari, curl, etc.) | `User-Agent: Mozilla/5.0 (Windows NT 10.0)`  |
| `Accept`          | What response format client accepts                 | `Accept: application/json`                   |
| `Connection`      | `keep-alive` or `close`                             | `Connection: keep-alive`                     |
| `Accept-Encoding` | `gzip`, `br`, `deflate` (compression)               | `Accept-Encoding: gzip, deflate, br`         |
| `Content-Length`  | Size of body (for POST/PUT)                         | `Content-Length: 256`                        |
| `Content-Type`    | Indicates JSON, form-data, etc. (for POST/PUT)      | `Content-Type: application/json`             |

## Browser-only compulsory headers

| Header        | Description                                                |
| ------------- | ---------------------------------------------------------- |
| `Origin`      | Sent automatically by browsers (for cross-origin requests) |
| `Referer`     | Previous page or request source                            |
| `Sec-Fetch-*` | Browser security metadata                                  |

---

## 5. Useful Optional Request Headers (client → backend)

These are the headers you'll use often in real apps.

| Header                          | Description                                             |
| ------------------------------- | ------------------------------------------------------- |
| `Authorization`                 | JWTs, API keys, tokens: `Authorization: Bearer <token>` |
| `Cookie`                        | Session cookies                                         |
| `X-Requested-With`              | Identifies AJAX requests                                |
| `X-Real-IP` / `X-Forwarded-For` | Used by proxies to identify real client IP              |
| `Range`                         | Used for partial downloads/streaming                    |

> 🎯 These headers are used in authentication, proxies, logs, file downloads.
