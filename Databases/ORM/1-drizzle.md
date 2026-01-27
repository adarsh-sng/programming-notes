## Common `onDelete` Options

| Option        | Behavior                                                             |
| ------------- | -------------------------------------------------------------------- |
| `cascade`     | Deletes child records when the parent is deleted                     |
| `set null`    | Sets the foreign key to `NULL` when the parent is deleted            |
| `set default` | Sets the foreign key to its default value when the parent is deleted |
| `restrict`    | Prevents deletion of the parent if child records exist               |
| `no action`   | Similar to `restrict` (behavior is database-dependent)               |

---

## Defining a Table

```typescript
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  name: text("name"),
  isActive: boolean("is_active").default(true),
  role: text("role").$type<"admin" | "user">().default("user"),
  createdAt: timestamp("created_at").defaultNow(),
});
```

---

## Queries

### Select All

```typescript
const allUsers = await db.select().from(users);
```

### Select Specific Columns

```typescript
const userEmails = await db
  .select({ id: users.id, email: users.email })
  .from(users);
```

### Filtering with `where`

```typescript
import { eq, gt, and, or } from "drizzle-orm";

const result = await db
  .select()
  .from(users)
  .where(eq(users.email, "alice@example.com"));

const activeAdmins = await db
  .select()
  .from(users)
  .where(and(eq(users.role, "admin"), eq(users.isActive, true)));
```

### Joins

```typescript
const usersWithPosts = await db
  .select()
  .from(users)
  .leftJoin(posts, eq(users.id, posts.userId));
```

---

## Insert

```typescript
await db.insert(users).values({
  email: "bob@example.com",
  name: "Bob",
});
```

### Insert and Return

Returns the inserted row, saving a second query to fetch the ID.

```typescript
const [newUser] = await db
  .insert(users)
  .values({ email: "charlie@example.com" })
  .returning();

// Return specific fields only
const [newId] = await db
  .insert(users)
  .values({ email: "dave@example.com" })
  .returning({ insertedId: users.id });
```

---

## Update

```typescript
await db
  .update(users)
  .set({ isActive: false, name: "Updated Name" })
  .where(eq(users.id, 1))
  .returning(); // Optional: see the updated row
```

---

## Delete

```typescript
await db.delete(users).where(eq(users.id, 1));
```
