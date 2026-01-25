# JavaScript Scope & Arrow Functions

## Key Points

- `{}` in object literals are **not** scoped
- Object literals do **not** create a new scope

## Arrow Functions & `this`

- Arrow functions use **lexical scoping**
- They **inherit** `this` from surrounding code (where they were defined)
- They do **not** determine `this` based on the caller

```js
// Scope: Global / Module (Top Level)
// 'this' = Window (or undefined in strict mode)

const client = {
  // <-- NOT a scope barrier!

  // Arrow function looks OUTSIDE the object for 'this'
  // It inherits from Top Level scope
  getContacts: async () => {
    console.log(this); // 'this' = Window/undefined
  },
};
```

> **Remember:** Object `{}` ≠ scope. Arrow functions capture `this` from where they're _written_, not where they're _called_.
