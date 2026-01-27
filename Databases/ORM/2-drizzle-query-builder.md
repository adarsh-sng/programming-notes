// Get all users

```typescript
const users = await db.query.users.findMany();
```

## Selecting Specific Columns

```typescript
const users = await db.query.users.findMany({
  columns: {
    id: true,
    email: true,
    // explicitly set false to exclude a column
  },
});
```

## Fetching Relations with `with`

```typescript
const usersWithPosts = await db.query.users.findMany({
  // 1. Fetch the user
  columns: { name: true },

  // 2. Automatically fetch their posts array
  with: {
    posts: true,
  },
});
```

**Result:**

```json
[
  {
    "name": "Alice",
    "posts": [{ "title": "Post 1" }, { "title": "Post 2" }]
  }
]
```

## Raw SQL Queries

```typescript
import { sql } from "drizzle-orm";

const idToFind = 10;

// execute returns a result object (an array of rows)
const result = await db.execute(sql`
  SELECT * FROM users WHERE id = ${idToFind}
`);
```

For commands that don't return data (like raw `UPDATE`/`DELETE`):

```typescript
await db.execute(sql`
  UPDATE users SET is_active = true WHERE id > 50
`);
```
