# JavaScript Strings

## Quick Reference

| Goal              | Methods                           |
| ----------------- | --------------------------------- |
| Change the ends   | `trim()`, `slice()`, `padStart()` |
| Check contents    | `includes()`, `startsWith()`      |
| Change characters | `replace()`, `toLowerCase()`      |
| Break it apart    | `split()`                         |
| Put it together   | `join()`, `+`, template literals  |

## The "Cleaners" (Formatting)

Used mostly for normalizing user input or preparing data for a database.

- **`trim()`** - Removes whitespace from both ends
- **`toLowerCase()` / `toUpperCase()`** - Essential for case-insensitive comparisons
  - Example: `if (email.toLowerCase() === savedEmail)`
- **`padStart(targetLength, padString)`** - Useful for formatting
  - Example: `"5".padStart(2, "0")` → `"05"`
- **`repeat(count)`** - Returns a string repeated n times

## The "Analyzers" (Searching)

Used to check if a string contains what you need. All return Booleans or Indices.

- **`includes(substring)`** - Returns `true` if the string contains the substring
- **`startsWith()` / `endsWith()`** - Much faster than regex or slice
- **`indexOf(substring)`** - Returns the starting index, or `-1` if not found

## The "Extractors" (Substrings)

Used to pull specific parts out of a larger string.

- **`slice(start, end)`** - The modern gold standard
  - Pro-tip: Use negative numbers to count from the back: `str.slice(-3)` gets the last 3 characters
- **`split(separator)`** - Turns a string into an array
  - Example: `"a,b,c".split(",")` → `["a", "b", "c"]`
- **`at(index)`** - Modern alternative to `str[i]`, supports negative indices
  - Example: `str.at(-1)` gets the last character

## The "Transformers" (Modifying)

Used to swap values or change the structure.

- **`replace(pattern, replacement)`** - Replaces the first match
- **`replaceAll(pattern, replacement)`** - Replaces all matches (ES2021)
- **`concat(...strings)`** - Joins strings together (most prefer `+` or template literals)

## Essential Array Methods

Since you often convert between strings and arrays:

- **`join(separator)`** - The inverse of `split()`. Turns an array back into a string
- **`filter(callback)`** - Removes items that don't match a condition
- **`map(callback)`** - Transforms every item in an array
- **`reduce(callback, initial)`** - Boils down an array into a single value
