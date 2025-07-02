# 📜 Shell Scripting Notes
---

## 𞷂 Table of Contents

1. [Introduction to Shell Scripting](#1-introduction-to-shell-scripting)
2. [Basic Shell Commands](#2-basic-shell-commands)
3. [Variables and Constants](#3-variables-and-constants)
4. [Input and Output](#4-input-and-output)
5. [Conditional Statements](#5-conditional-statements)
6. [Loops](#6-loops)
7. [Functions](#7-functions)
8. [Arrays](#8-arrays)
9. [String Manipulation](#9-string-manipulation)
10. [File Handling](#10-file-handling)
11. [Command-line Arguments](#11-command-line-arguments)
12. [Exit Status & Return Codes](#12-exit-status--return-codes)
13. [Error Handling & Debugging](#13-error-handling--debugging)
14. [Signals and Traps](#14-signals-and-traps)
15. [Process Management](#15-process-management)
16. [Scheduling Jobs (cron & at)](#16-scheduling-jobs-cron--at)
17. [Advanced Topics](#17-advanced-topics)
18. [Environment Variables & PATH](#18-environment-variables--path)
19. [Best Practices](#19-best-practices)
20. [Useful Built-in Commands](#20-useful-built-in-commands)
21. [Resources & Further Reading](#21-resources--further-reading)

---

## 1 Introduction to Shell Scripting

* Shell: Interface between user and OS
* Shell Script: File containing a sequence of shell commands
* Common Shells: `bash`, `zsh`, `sh`, `fish`
* First script:

  ```bash
  #!/bin/bash
  echo "Hello, World!"
  ```

---

## 2 Basic Shell Commands

| Command | Description            |
| ------- | ---------------------- |
| `ls`    | List files             |
| `cd`    | Change directory       |
| `pwd`   | Show current directory |
| `touch` | Create empty file      |
| `mkdir` | Make new directory     |
| `rm`    | Remove files/folders   |
| `cp`    | Copy files             |
| `mv`    | Move/Rename            |
| `cat`   | Display file contents  |
| `man`   | Manual/help pages      |

---

## 3 Variables and Constants

```bash
name="Adarsh"
readonly college="VIT"
unset name
```

* `$name`, `${name}` — access variable
* No spaces around `=`
* `readonly` makes variable constant
* `unset` deletes a variable

---

## 4 Input and Output

```bash
echo "Enter your name:"
read user
echo "Hello, $user!"
```

* `read -p "Prompt" var` — prompt user
* `read -s var` — silent input (e.g., passwords)
* Redirects:

  * `>` : overwrite
  * `>>`: append
  * `<` : input file

---

##  5 Conditional Statements

```bash
if [ "$a" -gt 10 ]; then
  echo "Greater"
elif [ "$a" -eq 10 ]; then
  echo "Equal"
else
  echo "Lesser"
fi
```

* `[ condition ]` or `[[ condition ]]`
* `test expr` is same as `[ expr ]`

---

## 6 Loops

### For Loop

```bash
for i in {1..5}; do
  echo "Number: $i"
done
```

### While Loop

```bash
while [ $n -lt 5 ]; do
  echo $n
  ((n++))
done
```

### Until Loop

```bash
until [ $n -ge 5 ]; do
  echo $n
  ((n++))
done
```

---

## 7 Functions

```bash
greet() {
  echo "Hello $1"
}
greet "Adarsh"
```

* `$1`, `$2` — positional params
* `return` — return status code (0–255)

---

## 8 Arrays

```bash
arr=(apple banana mango)
echo ${arr[1]}      # banana
echo ${arr[@]}      # all
echo ${#arr[@]}     # size
```

---

## 9 String Manipulation

```bash
str="hello world"
echo ${#str}           # length
echo ${str:0:5}        # slice
echo ${str/world/Adarsh} # replace
```

* `${var#pattern}` — remove prefix
* `${var%pattern}` — remove suffix

---

## 10 File Handling

```bash
if [ -f "file.txt" ]; then
  echo "File exists"
fi
```

* `-f` file exists, regular
* `-d` is directory
* `-r` readable
* `-w` writable
* `-x` executable

---

## 11 Command-line Arguments

```bash
echo $0  # script name
echo $1  # first arg
echo $#  # number of args
echo $@  # all args
```

---

## 12 Exit Status & Return Codes

* `$?` — last command exit code
* `exit 1` — custom exit
* `0` is success, non-zero is error

---

## 13 Error Handling & Debugging

```bash
set -e      # exit on error
set -x      # debug mode (print commands)
trap 'echo "Error at $LINENO"' ERR
```

---

## 14 Signals and Traps

```bash
trap "echo Caught SIGINT" SIGINT
```

* Used to intercept signals like `SIGINT`, `SIGTERM`
* Useful for cleanup scripts

---

## 15 Process Management

| Command | Use                     |
| ------- | ----------------------- |
| `ps`    | View processes          |
| `top`   | Live process monitor    |
| `kill`  | Kill process by PID     |
| `&`     | Run in background       |
| `wait`  | Wait for background job |
| `jobs`  | List background jobs    |

---

## 16 Scheduling Jobs (cron & at)

### `cron` – Repeated Jobs

```bash
crontab -e
# ┌───────────── minute (0 - 59)
# │ ┌───────────── hour (0 - 23)
# │ │ ┌───────────── day of month (1 - 31)
# │ │ │ ┌───────────── month (1 - 12)
# │ │ │ │ ┌───────────── day of week (0 - 6) (Sunday=0)
# │ │ │ │ │
# * * * * * command_to_execute
```

### `at` – One-time Jobs

```bash
echo "bash backup.sh" | at now + 2 minutes
```

---

## 17 Advanced Topics

* **Here Documents**:

  ```bash
  cat <<EOF
  Multi-line
  text block
  EOF
  ```

* **Subshells**:

  ```bash
  (cd dir && ls)
  ```

* **Arithmetic Expressions**:

  ```bash
  ((a = b + 5))
  ```

* **Eval**:

  ```bash
  cmd="ls -l"
  eval $cmd
  ```

* **Sourcing Files**:

  ```bash
  source config.sh
  ```

---

## 18 Environment Variables & PATH

* **Environment Variable**: Global variable accessible by all processes (e.g., `PATH`, `HOME`)
* **Set Temporarily**:

  ```bash
  export EDITOR=nano
  ```
* **PATH Variable**: Tells the shell where to look for executables

  ```bash
  echo $PATH
  export PATH="$PATH:/my/custom/bin"
  ```
* To persist changes, modify `~/.bashrc` or `~/.zshrc`

---

## 19 Best Practices

* Use `#!/bin/bash` shebang
* Quote all variables: `"${var}"`
* Check for errors: `if [ $? -ne 0 ]; then ...`
* Use functions for reuse
* Comment complex logic
* Prefer `[[ ]]` over `[ ]`

---

## 20 Useful Built-in Commands

| Command               | Description                   |
| --------------------- | ----------------------------- |
| `alias`               | Create shortcut               |
| `type`                | Show command type             |
| `source`              | Execute file in current shell |
| `which`               | Show command path             |
| `basename`, `dirname` | Path parsing                  |

---

## 21 Resources & Further Reading

* [Bash Reference Manual](https://www.gnu.org/software/bash/manual/)
* [ShellCheck Linter](https://www.shellcheck.net/)
* [Advanced Bash-Scripting Guide](https://tldp.org/LDP/abs/html/)
* [Explainshell](https://explainshell.com/)
