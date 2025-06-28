## 📚 Table of Contents

- [🐚 What Is a Shell?](#what-is-a-shell)
- [📂 Filesystem Commands](#filesystem-commands)



##  What Is a Shell?

Your **terminal** is a program that lets you type text-based commands and see their output.

But what **runs** those commands?

That’s the **shell**.

---

### 🛠️ What Does a Shell Do?

The shell’s main job is to:

- **Interpret** the commands you type
- **Execute** those commands

---

### 🔄 Shells as REPLs

Shells are often called **REPLs**, which stands for:

- **Read**  
- **Eval** (evaluate)  
- **Print**  
- **Loop**

In simple terms, a shell:

1. Reads the command you type  
2. Evaluates it (runs the program or command)  
3. Prints the output  
4. Loops back, showing a new prompt for the next command  

---

> 💡 This cycle makes shells interactive and powerful command interpreters.


##  Filesystem Commands

These commands help you interact with your Linux filesystem — navigate, read, modify, and search files or directories.

---

### 🔸 `echo $variable`
**Displays the value of a variable**.

```bash
NAME="Adarsh"
echo $NAME
# Output: Adarsh
```

---

### 🔸 `whoami`
**Prints the current logged-in username**.

```bash
whoami
# Output: your_username
```

---

### 🔸 `pwd`  
**Prints the current working directory** (stands for "Print Working Directory").

```bash
pwd
# Output: /home/user/projects
```

---

### 🔸 `cat`
**Displays the entire content of a file**.

```bash
cat notes.txt
```

---

### 🔸 `head`
**Shows the first 10 lines of a file** (default).

```bash
head log.txt
```

You can change line count:

```bash
head -n 5 log.txt
```

---

### 🔸 `tail`
**Shows the last 10 lines of a file** (default).

```bash
tail log.txt
```

Watch file updates live:

```bash
tail -f log.txt
```

---

### 🔸 `mv`
**Moves or renames a file or directory**.

```bash
mv old.txt new.txt       # Rename
mv file.txt /path/dir/   # Move
```

---

### 🔸 `cp`
**Copies files or directories**.

```bash
cp a.txt b.txt           # Copy file
cp -r folder1 folder2    # Copy directory recursively
```

---

### 🔸 `grep`
**Searches for patterns inside files**.

```bash
grep "error" logfile.txt
```

Case-insensitive search:

```bash
grep -i "error" logfile.txt
```

---

### 🔸 `find`
**Searches for files/directories in a path**.

```bash
find . -name "*.py"
```

Find files modified in the last 1 day:

```bash
find . -mtime -1
```

---

### 🔸 `ls`
**Lists files and folders in a directory**.

```bash
ls
ls -l        # Long format
ls -a        # Include hidden files
```

---

### 🔸 `rm`
**Deletes files or directories**.

```bash
rm file.txt            # Delete file
rm -r folder/          # Delete folder and contents
```

> ⚠️ Use with caution. No undo.

---

### 🔸 `touch`
**Creates an empty file or updates timestamp**.

```bash
touch hello.txt
```

---

### 🔸 `mkdir`
**Creates a new directory**.

```bash
mkdir new_folder
```

---

