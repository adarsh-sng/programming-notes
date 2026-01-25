# Node.js stdin — Manual vs Automatic Data Reading

## Stream Modes

### Paused Mode (default)

- No "data" events
- Node waits for you to request data
- You must pull data manually using `.read()`
- Triggered by default unless you call `.resume()`

### Flowing Mode

- "data" events fire automatically
- Data flows into your program without asking
- Enabled using `process.stdin.resume()`

## Manually Asking for Data (Paused Mode)

Use the "readable" event with `.read()`:

```javascript
process.stdin.setEncoding("utf8");

process.stdin.on("readable", () => {
  let chunk;
  while ((chunk = process.stdin.read()) !== null) {
    console.log("Got:", chunk);
  }
});
```

**Key points:**

- "readable" fires when data is available
- `.read()` pulls data out of the buffer
- If `.read()` returns null, no more data is ready
- You control exactly when to read input

## Automatically Receiving Data (Flowing Mode)

```javascript
process.stdin.setEncoding("utf8");
process.stdin.resume();

process.stdin.on("data", (chunk) => {
  console.log("Got:", chunk);
});
```

**Key points:**

- Stream pushes data to you
- You don't call `.read()`
- Best mode for games, keypress handling, and interactive apps
