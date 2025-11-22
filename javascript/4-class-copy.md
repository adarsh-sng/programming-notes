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

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.greet = function () {
  return `Hi, I'm ${this.name}`;
}; // SHARED
```

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
```

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