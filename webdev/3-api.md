`const Controller = new AbortController();` used to abort fetch requests. handles race conditions and cleanup in React components.
`controller.abort()` - cleanup function in `useEffect` to cancel ongoing requests when the component unmounts or dependencies change.

```js
const response = await fetch("/api/validate-word", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(word),
});
```
