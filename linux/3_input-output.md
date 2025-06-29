# Table of Contents

* [man Command](#man-command)
* [Flags](#flags)
* [Standard Output and Error](#standard-output-and-error)
* [Shell Scripting Basics](#shell-scripting-basics)

  * [Variables](#variables)
  * [Conditionals](#conditionals)
  * [Loops](#loops)
  * [Functions](#functions)
  * [Arguments](#arguments)
  * [Useful Shell Built-ins](#useful-shell-built-ins)

---

## man Command

* `man` displays the manual page for a command:

```bash
man ls
```

* Use `/` to search, `n` for next, `q` to quit.

---

## Flags

* Flags (or options) modify the behavior of a command.

### Conventions

* **Single-character** flags: prefixed with one dash (`-a`, `-l`, etc.)
* **Multi-character** flags: prefixed with two dashes (`--help`, `--version`)

Examples:

```bash
ls -l
curl --help
```

Not all commands follow the same syntax, but these are standard conventions in Unix-like tools.

---

## Standard Output and Error

* **stdout** = standard output (normal output)
* **stderr** = standard error (for error messages)

### Redirecting Output

```bash
command > file.txt     # Redirect stdout to file
command 2> error.txt   # Redirect stderr to file
command &> all.txt     # Redirect both stdout and stderr
```

### Viewing Output

```bash
command | less         # Pipe output to pager
command | grep "word"  # Pipe output to another command
```

---

## Shell Scripting Basics

Shell scripts are text files with shell commands, usually starting with a shebang (`#!/bin/bash` or `#!/bin/zsh`).

To create a script:

```bash
echo "#!/bin/bash" > script.sh
echo "echo Hello World" >> script.sh
chmod +x script.sh
./script.sh
```

---

### Variables

```bash
name="Adarsh"
echo "Hello $name"
```

---

### Conditionals

```bash
if [ $name = "Adarsh" ]; then
  echo "Welcome"
else
  echo "Access Denied"
fi
```

---

### Loops

```bash
for i in 1 2 3; do
  echo "Number: $i"
done
```

```bash
while [ $count -lt 5 ]; do
  echo $count
  count=$((count + 1))
done
```

---

### Functions

```bash
say_hello() {
  echo "Hello, $1"
}

say_hello "World"
```

---

### Arguments

```bash
#!/bin/bash
echo "Script name: $0"
echo "First argument: $1"
echo "Total args: $#"
```

---

### Useful Shell Built-ins

| Command | Purpose           |
| ------- | ----------------- |
| `cd`    | Change directory  |
| `pwd`   | Print working dir |
| `echo`  | Print to stdout   |
| `read`  | Get user input    |
| `exit`  | Exit the script   |

This is a solid starting point for learning shell scripting. Let me know if you want exercises or real script examples next.
