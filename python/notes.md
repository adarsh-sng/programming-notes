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

