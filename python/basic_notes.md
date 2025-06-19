## 📚 Table of Contents

- [🧠 Variable Naming Conventions](#-variable-naming-conventions)
- [🧭 Order of Functions in Python](#-order-of-functions-in-python)
- [🗂️ Dictionaries in Python](#dictionaries-in-python)
- [🍇 Sets in Python](#sets-in-python)
- [🍇 Multiple Return Values in Python](#multiple-return-values-in-python)


## 🧠 Variable Naming Conventions

Variable names **cannot contain spaces**. They're continuous strings of characters and should be written in a readable format.

> 🗣 _"Please use `snake_case` for variable names."_  
> — **Guido van Rossum**, Creator of Python

### 📦 Common Naming Styles

| **Name**       | **Description**                                        | **Example**           | **Languages That Recommend It**       |
|----------------|--------------------------------------------------------|------------------------|----------------------------------------|
| **Snake Case** | All words are lowercase, separated by underscores      | `my_hero_health`       | Python, Ruby, Rust                     |
| **Camel Case** | Capitalize each word except the first                  | `myHeroHealth`         | JavaScript, Java                       |
| **Pascal Case**| Capitalize every word, including the first             | `MyHeroHealth`         | C#, C++                                |

## 
## 🧭 Order of Functions in Python

In Python, **all functions must be defined before they're used**.

This might sound limiting at first, since the interpreter reads code **top to bottom**. But there's a simple convention that solves this problem.

---

### 💡 The Common Pattern

Most Python developers follow this structure:

1. **Define all helper functions** first.
2. **Define and call the main entry point** last.

This ensures that **all functions are loaded** into memory before any are called.

```python
def main():
    health = 10
    armor = 5
    add_armor(health, armor)

def add_armor(h, a):
    new_health = h + a
    print_health(new_health)

def print_health(new_health):
    print(f"The player now has {new_health} health")

# call entrypoint last
main()
```
> 🔁 **Reminder:** Python doesn't need a special `main()` function like some other languages (e.g., C++ or Java), but using one improves structure and clarity.

## 🗂️ Dictionaries in Python

Dictionaries store data in **key → value** pairs. They’re perfect for grouping related information.

---

### 🧪 Example

```python
car = {
  "brand": "Toyota",
  "model": "Camry",
  "year": 2019
}
```

Here, `car` is a dictionary with:

- Key `"brand"` → Value `"Toyota"`
- Key `"model"` → Value `"Camry"`
- Key `"year"` → Value `2019`

---

> 💡 **Tip:** Dictionaries use `{}` and each key must be **unique**.
### ⚠️ Duplicate Keys

Dictionaries do **not allow duplicate keys**. If a key appears more than once, the **last value overwrites the previous one**.

```python
car = {
  "brand": "Toyota",
  "brand": "Honda"
}

print(car["brand"])  # Output: Honda
```

Only the last `"brand"` key is kept.

---
### 🗑️ Deleting Dictionary Values

You can delete keys using the `del` keyword:

```python
names_dict = {
  "jack": "bronson",
  "jill": "mcarty",
  "joe": "denver"
}

del names_dict["joe"]

print(names_dict)
# Output: {'jack': 'bronson', 'jill': 'mcarty'}
```

> ⚠️ **Caution:** Deleting a non-existent key with `del` will raise a `KeyError`.
> As of Python version 3.7, dictionaries are **ordered**. In Python 3.6 and earlier, dictionaries were unordered.
---
## 🍇 Sets in Python

**Sets** are like lists, but:

- They are **unordered**
- They **guarantee uniqueness** — no duplicates allowed

### 🧪 Example

```python
fruits = {"apple", "banana", "grape"}
print(type(fruits))  # Output: <class 'set'>
print(fruits)        # Output: {'banana', 'grape', 'apple'}
```

---

### ➕ Add Values to a Set

```python
fruits = {"apple", "banana", "grape"}
fruits.add("pear")
print(fruits)  # Output: {'banana', 'grape', 'pear', 'apple'}
```

> ✅ Adding a duplicate won’t cause an error — it will be ignored.

---

### 🌀 Creating an Empty Set

```python
empty_set = set()
print(type(empty_set))  # Output: <class 'set'>
```

> ⚠️ `{}` creates an **empty dictionary**, not a set.

---

## 🎯 Multiple Return Values in Python

In Python, a function can **return more than one value** by separating them with commas.

---

### 🧪 Example

```python
def cast_iceblast(wizard_level, start_mana):
    damage = wizard_level * 2
    new_mana = start_mana - 10
    return damage, new_mana  # returns two values
```

Here, `cast_iceblast` returns both `damage` and `new_mana`.

---

### 📥 Receiving Multiple Values

When you call a function that returns multiple values, you can **unpack** them into separate variables:

```python
dmg, mana = cast_iceblast(5, 100)
print(f"Damage: {dmg}, Remaining Mana: {mana}")
```

📤 **Output:**
```
Damage: 10, Remaining Mana: 90
```

---

> 💡 **Tip:** Behind the scenes, Python packs multiple return values into a **tuple**.
