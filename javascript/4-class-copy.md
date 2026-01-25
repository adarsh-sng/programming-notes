```js
const a = {
  name: "Adarsh",
  age: 22,
  address: { city: "Delhi", country: "India" },
};
const b = { ...a }; // shallow copy using spread operator
const c = a; // reference copy
const d = JSON.parse(JSON.stringify(a)); // deep copy using JSON methods
```

Memory trade-offs: constructor methods on the prototype are shared per type; factory functions that inline methods per object duplicate function allocations unless shared via a prototype.

````js
// Constructor function with prototype method
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.greet = function () {
  return `Hi, I'm ${this.name}`;
}; // SHARED ON PROTOTYPE
````

### Arrow Functions and `this`

Arrow functions don't have their own `this`—they inherit it from the enclosing lexical scope.

```js
class Timer {
  constructor() {
    this.seconds = 0;
  }

  // Regular method - 'this' depends on call site
  start() {
    setInterval(function () {
      this.seconds++; // BUG: 'this' is undefined or window
    }, 1000);
  }

  // Arrow function - 'this' is lexically bound
  startFixed() {
    setInterval(() => {
      this.seconds++; // WORKS: 'this' refers to Timer instance
    }, 1000);
  }
}
```

| Function Type      | `this` Binding            | Use Case                       |
| ------------------ | ------------------------- | ------------------------------ |
| Regular `function` | Dynamic (call site)       | Methods needing dynamic `this` |
| Arrow `() => {}`   | Lexical (enclosing scope) | Callbacks, preserving `this`   |

> **Key**: Arrow functions are ideal for callbacks where you need to preserve `this` from the surrounding context.

````

```js
// Constructor - each instance has its own greet function
function Person(name) {
  this.name = name;
  this.greet = function () {
    return `Hi ${this.name}`;
  }; // NEW FUNCTION EACH TIME
}

// Class - all instances share the same greet method
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return `Hi ${this.name}`;
  } // SHARED ON PROTOTYPE
}

const p1 = new Person("Ada");
const p2 = new Person("Grace");
console.log(p1.greet === p2.greet); // false for constructor, true for class
````

constructor function vs class vs factory function

// new binds this to the new object being created

```js
function Person(name) {
  this.name = name;
}
const p = new Person("Ada"); // 'this' inside Person refers to the new object
```

---

JavaScript primitives are built-in value types defined by the language spec (ECMAScript) that are not objects and are immutable; the engine represents them directly and uses temporary “wrapper objects” only when accessing methods.

What counts as primitive
The 7 primitives are: string, number, bigint, boolean, symbol, undefined, and null.

typeof results: "string", "number", "bigint", "boolean", "symbol", "undefined"; special case: typeof null is "object".

How they “have methods”
Primitives don’t actually have properties or methods; when doing "abc".toUpperCase() or (3.14).toFixed(2), the engine auto-boxes the primitive into a temporary wrapper (String, Number, Boolean, Symbol, BigInt) to resolve the property, then discards it.

Because the wrapper is ephemeral, attempts to set properties on a primitive don’t persist:

let s = "hi"; s.x = 1; s.x // undefined

---

```js
class Student {
  constructor() {
    this.fname = "Adarsh";
  }
  study() {
    return `${this.fname} is studying.`;
  }
}
const s1 = new Student();
const s2 = { __proto__: Student.prototype };
```

# JavaScript Class Methods: Instance vs Prototype

## Key Concept: Where Methods Live

When defining methods in JavaScript classes, the syntax you use determines where the method is stored:

### Instance Methods (with `=`)

- Created using arrow function syntax with equals sign: `methodName = () => {}`
- A **new copy** is created for each instance of the class
- Uses more memory (each object has its own copy)
- `this` is lexically bound (useful for callbacks)

### Prototype Methods (without `=`)

- Created using standard method syntax: `methodName() {}`
- Stored **once** on the class prototype
- All instances share the same method (memory efficient)
- `this` is dynamically bound based on how the method is called

## Quick Reference

| Syntax            | Location  | Memory     | `this` Binding |
| ----------------- | --------- | ---------- | -------------- |
| `name = () => {}` | Instance  | Per object | Lexical        |
| `name() {}`       | Prototype | Shared     | Dynamic        |

> **Tip**: Look for the `=` sign to quickly identify where a method lives!
> --to ai : xx make good note from here --
> The equals sign (=) is usually the clue. If you see =, it's going on the Instance. If you see name() {} without an equals sign, it's going on the Prototype.
