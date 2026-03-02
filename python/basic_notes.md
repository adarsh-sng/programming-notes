## Table of Contents

* [Variable Naming Conventions](#variable-naming-conventions)
* [F-String](#f-string)
* [Order of Functions in Python](#order-of-functions-in-python)
* [Dictionaries in Python](#dictionaries-in-python)
* [Sets in Python](#sets-in-python)
* [Multiple Return Values in Python](#multiple-return-values-in-python)

---

## Variable Naming Conventions

Variable names **cannot contain spaces**. Use readable formats like:

> "Please use `snake_case` for variable names."
> — Guido van Rossum, Creator of Python

### Common Naming Styles

| Name        | Description                              | Example          | Common In          |
| ----------- | ---------------------------------------- | ---------------- | ------------------ |
| Snake Case  | Lowercase words separated by underscores | `my_hero_health` | Python, Ruby, Rust |
| Camel Case  | Each word capitalized except the first   | `myHeroHealth`   | JavaScript, Java   |
| Pascal Case | All words capitalized                    | `MyHeroHealth`   | C#, C++            |

---

## F-String

* Use `f` before the string.
* Variables inside `{}` are injected.

```python
name = "Adarsh"
greeting = f"Hello, {name}!"
print(greeting)  # Output: Hello, Adarsh!
```

---

## Order of Functions in Python

Functions must be defined before used. Python reads top to bottom.

**Best Practice**
Define all helper functions first. Call `main()` last.

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

main()
```

Use `main()` for structure, even though not required.

---

## Dictionaries in Python

Dictionaries store data in key → value pairs.

```python
car = {
  "brand": "Toyota",
  "model": "Camry",
  "year": 2019
}
```

* Keys must be unique.
* Duplicate keys? Last one wins:

```python
car = {"brand": "Toyota", "brand": "Honda"}
print(car["brand"])  # Output: Honda
```

### Deleting Keys

```python
del car["year"]
```

* `del` on a non-existent key raises `KeyError`.
* Python 3.7+ maintains insertion order in dictionaries.

---

## Sets in Python

Sets are unordered collections with unique elements.

```python
fruits = {"apple", "banana", "grape"}
print(type(fruits))
```

### Adding to a Set

```python
fruits.add("pear")
```

* Adding duplicates does nothing.

### Empty Set

```python
empty_set = set()  # NOT {}
```

---

## Multiple Return Values in Python

Functions can return multiple values using commas:

```python
def cast_spell(level, mana):
    return level * 2, mana - 10
```

### Unpacking Return Values

```python
dmg, mana_left = cast_spell(5, 100)
print(f"Damage: {dmg}, Remaining Mana: {mana_left}")
```

* Python returns values as a tuple under the hood.