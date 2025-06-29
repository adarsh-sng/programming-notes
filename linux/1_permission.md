# Table of Contents

* [sudo](#sudo)
* [Understanding Permissions](#understanding-permissions)
* [Changing Permissions](#changing-permissions)
* [Executables](#executables)
* [Changing Owners](#changing-owners)

---

## sudo

* **sudo** stands for **superuser do**. It allows a permitted user to execute a command as the superuser or another user, as specified by the security policy.
* Common usage:

```bash
sudo command_name
```

---

## Understanding Permissions

The permissions of an individual file or directory are represented as a 10-character string:

* The first character indicates the type:

  * `-`: Regular file (e.g. `-rwxrwxrwx`)
  * `d`: Directory (e.g. `drwxrwxrwx`)

* The next 9 characters are grouped into three sets:

  * **Owner** permissions (first 3 characters)
  * **Group** permissions (next 3 characters)
  * **Others** permissions (last 3 characters)

Each set has:

* `r` – read
* `w` – write
* `x` – execute

Examples:

```text
rwx  -> read, write, and execute
rw-  -> read and write only
r-x  -> read and execute only
```

To view permissions, use:

```bash
ls -l
```

---

## Changing Permissions

Use the `chmod` command (**change mode**) to set or modify file and directory permissions.

Example:

```bash
chmod -R u=rwx,g=,o= DIRECTORY
```

Explanation:

* `-R`: Apply changes recursively to contents
* `u`: user (owner)
* `g`: group
* `o`: others
* `=`: assign specified permissions
* `rwx`: read, write, execute
* `g=`, `o=`: remove all permissions from group and others

---

## Executables

Files with a `.sh` extension are shell scripts—text files that contain shell commands.

You can run a shell script by providing its path:

```bash
mydir/program.sh
```

If it's in the current directory, use `./` to specify the path:

```bash
./program.sh
```

Before running, make sure the script is executable:

```bash
chmod +x program.sh
```

---

## Changing Owners

Use the `chown` command (**change owner**) to change the owner and/or group of a file or directory. Requires root privileges.

Syntax:

```bash
sudo chown new_owner:new_group filename
```

Example:

```bash
sudo chown adarsh:staff notes.txt
```

This changes the owner of `notes.txt` to `adarsh` and its group to `staff`.

To apply recursively:

```bash
sudo chown -R user:group directory/
```
