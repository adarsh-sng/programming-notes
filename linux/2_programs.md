# Table of Contents

* [Compiled vs. Interpreted](#compiled-vs-interpreted)
* [Shebang](#shebang)
* [Config Files](#config-files)
* [Environment Variables](#environment-variables)
* [PATH Variable](#path-variable)
* [Modifying PATH](#modifying-path)

---

## Compiled vs. Interpreted

* `sh` is a compiled binary, often written in C.
* `.sh` is a shell script — a plain text file interpreted by a shell like `sh`, `bash`, or `zsh`.
* Compiled executables can run directly. Scripts require an interpreter.

---

## Shebang

* A **shebang** (`#!`) tells the shell which program to use to run the script.
* Syntax:

```bash
#! interpreter [optional-arg]
```

Examples:

```bash
#!/bin/bash       # Bash
#!/usr/bin/zsh    # Zsh
#!/usr/bin/python3  # Python 3
```

* Without a shebang, scripts need to be run like: `bash script.sh`

---

## Config Files

* Used to configure the shell at startup:

  * Bash: `~/.bashrc`
  * Zsh: `~/.zshrc`

These files can set:

* Environment variables
* Aliases
* PATH modifications

---

## Environment Variables

* Available to all child processes of the shell.
* View current variables:

```bash
env
```

* Set a variable:

```bash
export NAME="Adarsh"
echo $NAME
```

* Scripts can access exported variables:

`introduce.sh`:

```bash
#!/bin/sh
echo "Hi I'm $NAME"
```

Make it executable:

```bash
chmod +x introduce.sh
./introduce.sh  # Hi I'm Adarsh
```

---

## PATH Variable

* A colon-separated list of directories the shell checks to find commands.

```bash
echo $PATH
```

Example:

```text
/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin
```

* Without PATH, you'd have to run `/bin/ls` instead of just `ls`.

---

## Modifying PATH

* Append a new directory to your current PATH:

```bash
export PATH="$PATH:/your/custom/path"
```

* Add this to `~/.bashrc` or `~/.zshrc` to make it persistent across sessions.
