## Logical Operators

### JavaScript Logical Operators

#### || (OR) - First Truthy Value
Returns the first truthy value it finds, or the last value if all are falsy:

```javascript
const result = false || null || "hello" || "world";
console.log(result); // "hello" (first truthy)

const result2 = false || null || undefined;
console.log(result2); // undefined (last value)
```

#### && (AND) - First Falsy Value
Returns the first falsy value it finds, or the last value if all are truthy:

```javascript
const result = "hello" && "world" && 42;
console.log(result); // 42 (all truthy, returns last)

const result2 = "hello" && false && "world";
console.log(result2); // false (first falsy)
```

#### ?? (Nullish Coalescing) - Only for null/undefined
Returns the right side only if left side is null or undefined:

```javascript
const result = null ?? "default";      // "default"
const result2 = undefined ?? "backup"; // "backup"
const result3 = 0 ?? "fallback";       // 0 (not null/undefined!)
const result4 = "" ?? "empty";         // "" (not null/undefined!)
```

#### ?: (Ternary) - Conditional Expression
Short if/else statement:

```javascript
const age = 20;
const status = age >= 18 ? "adult" : "minor";
console.log(status); // "adult"
```

### Comparison Table

| Operator | Behavior | Use Case | Example |
|----------|----------|----------|---------|
| \|\| | First truthy or last value | Default for any falsy | `name \|\| "Guest"` |
| && | First falsy or last value | Conditional execution | `user && user.greet()` |
| ?? | Right side if left is null/undefined | Default for null only | `count ?? 0` |
| ?: | True/false branching | Conditional assignment | `age >= 18 ? "adult" : "minor"` |

### Practical Examples

#### Default Values
```javascript
// Using || (falsy fallback)
const name1 = user.name || "Guest";     // Falls back for "", 0, false, null, undefined

// Using ?? (null/undefined only)  
const name2 = user.name ?? "Guest";     // Only falls back for null, undefined
```

#### Short-circuit Evaluation
```javascript
// && for conditional execution
user && user.greet();        // Only call if user exists

// || for default assignment
this.data = this.data || []; // Set to empty array if falsy
```

**Key Point**: The `??` is super useful when `0`, `""`, or `false` are valid values you want to keep!


---
```js
function lol({name,age}={}){
  console.log(name)
  console.log(age)
}
user={
  name:"ll",
  age:25,
  mail:"notuseful",
  idk:"what will hppn"
}
lol(user)
```