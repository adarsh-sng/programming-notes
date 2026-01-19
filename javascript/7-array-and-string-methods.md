# Essential String & Array Methods

> A curated list of the most essential methods for Strings and Arrays in JavaScript/TypeScript that handle searching, checking, and replacing.

---

## String Methods (Text)

These methods only work on strings (text).

### Checking Content (Returns Boolean)

Used to check if a string contains specific characters.

| Method                      | Description                                           |
| --------------------------- | ----------------------------------------------------- |
| `.startsWith(searchString)` | Checks if the string begins with the characters       |
| `.endsWith(searchString)`   | Checks if the string ends with the characters         |
| `.includes(searchString)`   | Checks if the string contains the characters anywhere |

**Example:**

```javascript
const str = "Hello World";

str.startsWith("He"); // true
str.endsWith("ld"); // true
str.includes("lo W"); // true
```

---

### Replacing Content (Returns New String)

| Method                               | Description                                  |
| ------------------------------------ | -------------------------------------------- |
| `.replace(searchValue, newValue)`    | Replaces only the **first** occurrence found |
| `.replaceAll(searchValue, newValue)` | Replaces **all** occurrences found           |

**Example:**

```javascript
const text = "apple banana apple";

// Only replaces the first "apple"
console.log(text.replace("apple", "orange"));
// Output: "orange banana apple"

// Replaces every "apple"
console.log(text.replaceAll("apple", "orange"));
// Output: "orange banana orange"
```

---

### Trimming (Cleaning Whitespace)

Removes spaces, tabs, and newlines.

| Method         | Description                        |
| -------------- | ---------------------------------- |
| `.trim()`      | Removes whitespace from both ends  |
| `.trimStart()` | Removes whitespace from start only |
| `.trimEnd()`   | Removes whitespace from end only   |

**Example:**

```javascript
const messy = "   data   ";
console.log(messy.trim()); // "data"
```

---

### Splitting

| Method              | Description                   |
| ------------------- | ----------------------------- |
| `.split(separator)` | Breaks a string into an Array |

**Example:**

```javascript
const csv = "red,green,blue";
const colors = csv.split(","); // ["red", "green", "blue"]
```

---

## Array Methods (Lists)

These methods work on lists (`[]`).

### Checking (Returns Boolean)

| Method            | Description                                      |
| ----------------- | ------------------------------------------------ |
| `.some(fn)`       | True if **at least one** item matches (OR logic) |
| `.every(fn)`      | True if **ALL** items match (AND logic)          |
| `.includes(item)` | True if the array contains this exact value      |

**Example:**

```javascript
const nums = [1, 2, 3, 4];

nums.some((n) => n > 3); // true (4 is > 3)
nums.every((n) => n > 0); // true (all are > 0)
nums.includes(2); // true
```

---

### Finding (Returns Item/Index)

| Method           | Description                                          |
| ---------------- | ---------------------------------------------------- |
| `.find(fn)`      | Returns the first item that matches (or `undefined`) |
| `.findIndex(fn)` | Returns the index of the first match (or `-1`)       |
| `.indexOf(item)` | Returns the index of a specific value (or `-1`)      |

**Example:**

```javascript
const users = ["Alice", "Bob", "Charlie"];

users.find((u) => u.startsWith("B")); // "Bob"
users.findIndex((u) => u === "Charlie"); // 2
users.indexOf("Alice"); // 0
```

---

### Transforming (Returns New Array)

| Method        | Description                    |
| ------------- | ------------------------------ |
| `.map(fn)`    | Changes every element          |
| `.filter(fn)` | Keeps only elements that match |

**Example:**

```javascript
const arr = [1, 2, 3];

const doubled = arr.map((x) => x * 2); // [2, 4, 6]
const evens = arr.filter((x) => x % 2 === 0); // [2]
```

---

## Quick Reference Summary

| Goal              | String Method                   | Array Method                      |
| ----------------- | ------------------------------- | --------------------------------- |
| Does it have X?   | `.includes()`                   | `.includes()` / `.some()`         |
| Where is X?       | `.indexOf()`                    | `.indexOf()` / `.findIndex()`     |
| Get specific part | `.substring()` / `.slice()`     | `.slice()`                        |
| Fix/Change        | `.replace()` / `.replaceAll()`  | `.map()` (transform)              |
| Start/End check   | `.startsWith()` / `.endsWith()` | check `arr[0]` or `arr[length-1]` |

---

## Advanced: Type Conversion (Casting)

Essential methods when moving between Strings, Numbers, and Booleans.

### String to Number

Used when you get input from a form or API (which is often a string) and need to do math on it.

| Method       | Syntax                 | Return | Description                                                           |
| ------------ | ---------------------- | ------ | --------------------------------------------------------------------- |
| `Number`     | `Number(val)`          | number | Strict conversion. If string has non-digits, returns `NaN`            |
| `parseInt`   | `parseInt(str, radix)` | number | Parses integers. Stops at first non-digit. Specify radix (usually 10) |
| `parseFloat` | `parseFloat(str)`      | number | Parses floating-point numbers (decimals)                              |
| `+` (Unary)  | `+str`                 | number | Shortest way to convert. Same as `Number()`                           |

**Example:**

```javascript
Number("10px"); // NaN (Strict)
parseInt("10px"); // 10  (Forgiving - stops at 'p')
parseFloat("10.5"); // 10.5
+"42"; // 42
```

---

### Number to String

Used when you need to display a number or format it for a URL.

| Method           | Syntax                 | Return | Description                                                |
| ---------------- | ---------------------- | ------ | ---------------------------------------------------------- |
| `String`         | `String(val)`          | string | Universal. Works on `null`/`undefined` too                 |
| `.toString()`    | `num.toString(base?)`  | string | Standard method. Can convert to Binary (2), Hex (16), etc. |
| `.toFixed()`     | `num.toFixed(digits)`  | string | Rounds to specific decimal places. Returns a string!       |
| `.toPrecision()` | `num.toPrecision(len)` | string | Formats to a specific total length                         |

**Example:**

```javascript
const n = 255;
String(n); // "255"
n.toString(16); // "ff" (Hexadecimal)
n.toString(2); // "11111111" (Binary)

const pi = 3.14159;
pi.toFixed(2); // "3.14" (Common for prices)
```

---

### Boolean Conversion (Truthiness)

Used for conditional checks (if statements).

| Method    | Syntax         | Return  | Description                                      |
| --------- | -------------- | ------- | ------------------------------------------------ |
| `Boolean` | `Boolean(val)` | boolean | Converts value to true/false based on truthiness |
| `!!`      | `!!val`        | boolean | "Double Bang". Shortest way to cast to boolean   |

**The "Falsy" List** (Everything else is `true`):

> `false`, `0`, `""` (empty string), `null`, `undefined`, `NaN`

**Example:**

```javascript
Boolean(0); // false
Boolean("hello"); // true
!!""; // false
!!{}; // true (Empty object is truthy!)
```

---

### Object & JSON Conversion

Used for sending data to APIs or saving to local storage.

| Method           | Syntax                | Return | Description                                  |
| ---------------- | --------------------- | ------ | -------------------------------------------- |
| `JSON.stringify` | `JSON.stringify(obj)` | string | Converts an Object/Array into a JSON string  |
| `JSON.parse`     | `JSON.parse(str)`     | Object | Converts a JSON string back into a JS Object |

**Example:**

```javascript
const user = { id: 1, name: "Alice" };

const jsonStr = JSON.stringify(user);
// '{"id":1,"name":"Alice"}'

const cleanObj = JSON.parse(jsonStr);
// { id: 1, name: "Alice" }
```

---

### Safety Checks (Type Guards)

Before converting, you often need to check what you have.

| Method          | Syntax               | Return  | Description                                                                  |
| --------------- | -------------------- | ------- | ---------------------------------------------------------------------------- |
| `typeof`        | `typeof val`         | string  | Returns type: `"string"`, `"number"`, `"boolean"`, `"object"`, `"undefined"` |
| `Number.isNaN`  | `Number.isNaN(val)`  | boolean | Strictly checks if value is `NaN`                                            |
| `Array.isArray` | `Array.isArray(val)` | boolean | Checks if value is an Array (since `typeof []` is `"object"`)                |

**Example:**

```javascript
typeof "Hello"; // "string"
Number.isNaN(NaN); // true
Array.isArray([1, 2]); // true
```

---

## Note

> Would you like me to explain `.reduce()`? It is the most powerful array method but also the most confusing.
