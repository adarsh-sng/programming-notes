
> `npm pkg set type="module"` - set module in js.

## first class functions


JavaScript is extremely broad-minded about the number of arguments you can pass to a function. If you pass too many, the extra ones are ignored. If you pass too few, the missing parameters are assigned the value undefined.

- The ability to treat functions as values, combined with the fact that local bindings are re-created every time a function is called, brings up an interesting question: What happens to local bindings when the function call that created them is no longer active?

This feature—being able to reference a specific instance of a local binding in an enclosing scope—is called closure. A function that references bindings from local scopes around it is called a closure.

- Running through a simple loop is generally cheaper than calling a function multiple times.
---
**why cant we use async await in forEach loop?**

**what is debouncing?**

*TreeShaking* - A technique used to eliminate unused code from a final bundle, reducing the size of the output and improving performance.
- It is a way to optimize the code by removing dead code.   
- It works by analyzing the code and removing any code that is not used or referenced.
- It is commonly used in modern JavaScript build tools like Webpack and Rollup.

*code splitting* - A technique used to split the code into smaller chunks that can be loaded on demand, improving the initial load time of the application.
- It allows you to load only the code that is needed for a specific part of the application, rather than loading the entire application at once.
- This can be achieved using dynamic imports or by using libraries like React.lazy and React.Suspense in React applications.

Object.keys() - Returns an array of a given object's own enumerable property names, in the same order as that provided by a for...in loop.
Object.values() - Returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop.
Array.from() - Creates a new, shallow-copied Array instance from an array-like or iterable object.
