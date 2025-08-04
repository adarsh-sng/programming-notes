> `npm pkg set type="module"` - set module in js.

## First Class Functions

JavaScript is extremely broad-minded about the number of arguments you can pass to a function. If you pass too many, the extra ones are ignored. If you pass too few, the missing parameters are assigned the value undefined.

- The ability to treat functions as values, combined with the fact that local bindings are re-created every time a function is called, brings up an interesting question: What happens to local bindings when the function call that created them is no longer active?

This feature—being able to reference a specific instance of a local binding in an enclosing scope—is called closure. A function that references bindings from local scopes around it is called a closure.

- Running through a simple loop is generally cheaper than calling a function multiple times.

---

**Why can't we use async await in forEach loop?**

**What is debouncing?**

*TreeShaking* - A technique used to eliminate unused code from a final bundle, reducing the size of the output and improving performance.
- It is a way to optimize the code by removing dead code.   
- It works by analyzing the code and removing any code that is not used or referenced.
- It is commonly used in modern JavaScript build tools like Webpack and Rollup.

*Code Splitting* - A technique used to split the code into smaller chunks that can be loaded on demand, improving the initial load time of the application.
- It allows you to load only the code that is needed for a specific part of the application, rather than loading the entire application at once.
- This can be achieved using dynamic imports or by using libraries like React.lazy and React.Suspense in React applications.

`Object.keys()` - Returns an array of a given object's own enumerable property names, in the same order as that provided by a for...in loop.

`Object.values()` - Returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop.

`Array.from()` - Creates a new, shallow-copied Array instance from an array-like or iterable object.

- What is deep copy and shallow copy?

What are @parameters and @returns in JSDoc?

What are decorators in JS?

---
## Object Destructuring
```javascript
const person = {
    username: "adarsh",
    displayName: "Adarsh Singh",
    hobbies: ["coding", "gaming", "reading"],
    education: {
        subject:"Computer Science",
        year:2023
        }
    is:"cool";
    isCool: true;
};
const {
    username="defaultUser", // default value if username is not present
    displayName:fullName, // variable name should be same as key name, different name can be given using colon
    hobbies: [firstHobby, secondHobby],
    education: { subject, year },
    ...rest // rest operator to get the rest of the properties
} = person;
console.log(username); // "adarsh"
console.log(firstHobby); // "coding"
console.log(fullName); // "Adarsh Singh"
console.log(secondHobby); // "gaming"
console.log(rest); // { is: "cool", isCool: true }
```
- if value is not present in object then it will be undefined
 

 ---
 ## process.stdout.write()
- `process.stdout.write()` is a method in Node.js that writes data to the standard output stream.
- It is used to output data without adding a newline character at the end, unlike `console.log()`.
- It can be used to create more controlled output, such as progress bars or dynamic updates to the console.
- It is often used in conjunction with ANSI escape sequences to control the appearance of the output in the terminal.
- Example:
```javascript
process.stdout.write("Loading...");
setTimeout(() => {
    process.stdout.write("\rDone!\n");
}, 2000);
```         
---
- Global `setTimeout(cb, ms)` expects a callback, can't be used with `await`.
- `import { setTimeout } from 'node:timers/promises'` provides a Promise-returning version for use with `await` (no callback).
- Use Promise-based `setTimeout` for cleaner linear async code, especially in CLI apps.

> {} -> this means you have to return something from the function, () -> this means you don't have to return anything from the function.

---
## hoisting
- Hoisting is a JavaScript mechanism where **variables and function** declarations are moved to the top of their containing scope during the compile phase.
- This means that you can use variables and functions before they are declared in the code.
- However, only the declarations are hoisted, not the initializations.
- For example, if you try to access a variable before it is declared, it will return `undefined`, not an error.
- Hoisting applies to both function declarations and variable declarations (using `var`).
- It does not apply to variables declared with `let` and `const`, which are block-scoped and not hoisted in the same way.
- Example:
```javascript
console.log(x); // undefined
var x = 5;
console.log(x); // 5
``` 