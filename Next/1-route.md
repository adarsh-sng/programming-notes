# Next.js App Router (app/)

Introduced in Next.js 13, the App Router powers the React Server Components architecture. Every folder inside `app/` defines a route, and a `page.js` file inside that folder makes the route publicly accessible.

- `app/page.js` → `www.site.com/`
- `app/about/page.js` → `www.site.com/about`
- `app/dashboard/settings/page.js` → `www.site.com/dashboard/settings`

Only `page.js` exposes a URL; additional files (for example `components.js`, `styles.css`) remain private.

## Magic Files for UI States

The App Router reserves specific filenames to simplify common UI patterns:

- `layout.js` — wraps descendant pages (ideal for navigation shells).
- `loading.js` — renders automatically while data loads.
- `error.js` — displays when the page throws.
- `not-found.js` — custom 404 screen.

## 1. Nested Routes (The Basics)

Folders set the URL path. Place a `page.js` inside to publish the route.

```plaintext
app/
├── page.js               -> www.site.com/
├── about/
│   └── page.js           -> www.site.com/about
└── dashboard/
    ├── page.js           -> www.site.com/dashboard
    └── settings/
        └── page.js       -> www.site.com/dashboard/settings
```

## 2. Dynamic Routes (Params)

Use square brackets when the segment varies at runtime (blog posts, user profiles, and so on).

```plaintext
app/
└── blog/
    └── [slug]/           -> matches /blog/1, /blog/hello-world
        └── page.js
```

Access the parameter directly from the page component. In recent Next.js versions `params` is a Promise, so await it.

```javascript
// app/blog/[slug]/page.js
export default async function BlogPost({ params }) {
  const slug = (await params).slug; // "hello-world"
  return <h1>Reading Post: {slug}</h1>;
}
```

## 3. API Routes (Route Handlers)

Route handlers replace `pages/api/*.js` by defining `route.js` files under `app/api/`.

- Handles raw HTTP verbs (`GET`, `POST`, `PUT`, `DELETE`).
- **Conflict warning:** a folder cannot contain both `page.js` and `route.js`; Next.js would not know whether to serve UI or JSON.

```plaintext
app/
└── api/
    └── users/
        └── route.js      -> endpoint: /api/users
```

```javascript
import { NextResponse } from "next/server";

export async function GET() {
  const users = [{ id: 1, name: "Alice" }];
  return NextResponse.json(users);
}

export async function POST(request) {
  const body = await request.json();
  return NextResponse.json({ message: "User created", data: body });
}
```

## 4. Search Params (Query Strings)

Query string values appear in the `searchParams` prop that Next.js injects into `page.js` components. They are not available in `layout.js`.

```javascript
// URL: www.site.com/shop?sort=desc
export default function Shop({ searchParams }) {
  const sortOrder = searchParams.sort; // "desc"
  return <p>Sorting by: {sortOrder}</p>;
}
```

## 5. Advanced Routing Patterns

Next.js recognises naming conventions that alter routing without changing the URL.

### Route Groups `(folder)`

Organise routes or apply scoped layouts without affecting the path.

```plaintext
app/
├── (marketing)/
│   ├── layout.js       -> layout specific to marketing pages
│   └── about/
│       └── page.js     -> URL remains /about
└── (shop)/
    ├── layout.js       -> layout specific to shop pages
    └── cart/
        └── page.js     -> URL remains /cart
```

### Private Folders `_folder`

Folders prefixed with an underscore are ignored by the router. Store collocated utilities here.

```plaintext
app/
└── dashboard/
    ├── _components/    -> not a route
    │   └── button.js
    └── page.js
```

### Catch-All Segments `[...slug]`

Match variable depth URLs, returning each segment in an array. Use `[[...slug]]` to make the segment optional (handles `/` as well).

```javascript
// app/docs/[...slug]/page.js
export default function DocPage({ params }) {
  return <div>Path: {params.slug.join(" / ")}</div>;
}
```

## 6. Navigation Helpers

### `<Link>` for Declarative Navigation

Use `Link` instead of `<a>` to benefit from prefetching.

```javascript
import Link from "next/link";

<Link href="/dashboard">Go to Dashboard</Link>;
```

### `useRouter` for Programmatic Navigation

Client components can push routes via the App Router navigation hooks.

```javascript
"use client";
import { useRouter } from "next/navigation";

export default function LoginButton() {
  const router = useRouter();
  return <button onClick={() => router.push("/dashboard")}>Login</button>;
}
```

## Summary Checklist

| Feature        | Syntax                     | URL Result               |
| -------------- | -------------------------- | ------------------------ |
| Basic route    | `folder/page.js`           | `/folder`                |
| Dynamic route  | `folder/[id]/page.js`      | `/folder/123`            |
| Catch-all      | `folder/[...slug]/page.js` | `/folder/a/b/c`          |
| Route group    | `(group)/page.js`          | `/` (folder ignored)     |
| Private folder | `_utils/`                  | (never routed)           |
| API route      | `folder/route.js`          | `/folder` (returns JSON) |
