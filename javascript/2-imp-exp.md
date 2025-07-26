# ES Module Import/Export Notes

## ES Modules Overview
- Introduced in ES6 (2015) for modular JavaScript.
- Supported in modern browsers and Node.js (with config).
- Operate in strict mode by default.

### Key Features
- **Module Scope:** Prevents global namespace pollution.
- **Top-Level Only:** `import`/`export` must be at top level.
- **Live Bindings:** Imported values reflect changes in the exporting module.

---

## Import Syntax

| Syntax | Example | Description |
|--------|---------|-------------|
| Default Import | `import defaultExport from "module-name";` | Imports default export. |
| Namespace Import | `import * as name from "module-name";` | Imports all exports as an object. |
| Named Import | `import { export1 } from "module-name";` | Imports specific named exports. |
| Named Import with Alias | `import { export1 as alias1 } from "module-name";` | Renames imported export. |
| String Literal Named Import | `import { "string name" as alias } from "module-name";` | Imports string-named export (must alias). |
| Multiple Named Imports | `import { export1, export2 } from "module-name";` | Imports multiple named exports. |
| Default + Named Imports | `import defaultExport, { export1 } from "module-name";` | Combines default and named imports. |
| Default + Namespace Imports | `import defaultExport, * as name from "module-name";` | Combines default and namespace imports. |
| Side Effects Only | `import "module-name";` | Runs module for side effects only. |
| Dynamic Import | `import("module-name").then(...)` | Loads module dynamically. |

---

## Export Syntax

| Type | Example | Description |
|------|---------|-------------|
| Named Export | `export let name1, name2;` | Exports items by name. |
| Named Export (Grouped) | `export { name1, name2 };` | Exports existing declarations. |
| Default Export | `export default function () {}` | Exports one primary item. |
| Aggregating Export | `export * from "module-name";` | Re-exports all named exports. |
| Aggregating Named Export | `export { name1 } from "module-name";` | Re-exports specific named exports. |

---

## Module Specifiers
- **Relative:** `./module.js`, `../utils/module.js`
- **Absolute:** `https://example.com/module.js`
- **Bare:** `react`, `node:path`

---

## Dynamic Import
- Use `import()` for conditional/lazy loading.
    ```js
    import("./math.js").then((module) => {
        console.log(module.add(2, 3));
    });
    ```

---

## Import Attributes (ES2022+)
- For JSON and other modules:
    ```js
    import data from "./data.json" with { type: "json" };
    ```

---

## Common Pitfalls
- Duplicate named exports cause errors.
- Only one default export per module.
- `import` statements require `<script type="module">` in browsers.
- Named imports must match export names unless aliased.

---

## Best Practices
- Use default exports for main functionality only.
- Prefer named exports for utilities.
- Keep modules focused and single-responsibility.
- Use relative paths for portability.
- Avoid unnecessary namespace imports.

---

## Example

**math.js**
```js
export function add(a, b) { return a + b; }
export function subtract(a, b) { return a - b; }
export default function multiply(a, b) { return a * b; }
```

**app.js**
```js
import multiply, { add, subtract } from "./math.js";
console.log(add(2, 3));      // 5
console.log(subtract(5, 3)); // 2
console.log(multiply(4, 5)); // 20
```

**Browser:**  
`<script type="module" src="app.js"></script>`

**Node.js:**  
Set `"type": "module"` in `package.json`.

---

## Live Bindings Example

**counter.js**
```js
export let count = 0;
export function increment() { count++; }
```

**app.js**
```js
import { count, increment } from "./counter.js";
console.log(count); // 0
increment();
console.log(count); // 1
```

---

## Resources
- [MDN: import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
- [MDN: export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)
- [MDN: JavaScript Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [JavaScript.info: Export and Import](https://javascript.info/import-export)
