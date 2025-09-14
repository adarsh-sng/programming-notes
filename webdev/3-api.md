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

```js
const params = new URLSearchParams();
params.append("username", "example");

// GET request sent to https://example.org/login?username=example
const response = await fetch(`https://example.org/login?${params}`);
```
```js
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const myRequest = new Request("https://example.org/post", {
  method: "POST",
  body: JSON.stringify({ username: "example" }),
  headers: myHeaders,
});

const response = await fetch(myRequest);
```

fetch takes a request object as input and returns a promise that resolves to a response object.