# Terminal Escape & ANSI Escape Sequences

## What is an Escape Sequence?
- **Escape sequences** are special character sequences starting with the Escape (ESC, `\x1B`, ASCII 27) character.
- They instruct the terminal to perform actions (move cursor, change color, etc.), not display text.

## What are ANSI Escape Sequences?
- **ANSI escape sequences** are standardized escape codes as defined by ANSI X3.64 (ECMA-48).
- Used for cursor movement, text styling, color, and screen control in terminals.

## Structure of ANSI Escape Sequences
- ESC = `\x1B`
- `[` = control sequence introducer (CSI)
- *parameters* = numbers/arguments (optional)
- *command* = final letter denoting action

## Common Examples

| Sequence    | Effect                | Usage Example       |
| ----------- | --------------------- | ------------------ |
| `\x1B[0m`   | Reset styles          | End colored text   |
| `\x1B[1m`   | Bold on               | Headings           |
| `\x1B[31m`  | Red text              | Error messages     |
| `\x1B[2J`   | Clear entire screen   | Redraw UI          |
| `\x1B[5A`   | Cursor up 5 lines     | Progress refresh   |
| `\x1B[?25l` | Hide cursor           | During animation   |
| `\x1B[?25h` | Show cursor           | After animation    |

## Why Use ANSI Escape Sequences?
- **Fine-grained control**: Layout, cursor, text color, and more.
- **Critical for CLI/TUI interactivity**.
