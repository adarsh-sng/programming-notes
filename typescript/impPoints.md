annotations vs assertions vs satisfies
- annotation: explicitly specify type for variable, function return type, etc.
- assertion: tell compiler to treat a value as a specific type 
    - for json interop or when you know more about the type than the compiler
- satisfies: ensure value conforms to a type without changing its inferred type 
``` ts
// annotation
let age: number = 25; 
// assertion
let someValue: unknown = "hello";
let strLength: number = (someValue as string).length;
// satisfies
let user = { name: "adarsh", age: 22 } as const satisfies { name: string; age: number };
``` 
//| union type
// & intersection