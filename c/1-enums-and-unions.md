enums- are just enumerated list of possible values.

```c
typedef enum Day {
    SUNDAY,
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY
}day_t;
```
By default, the first name has the value 0, the second 1, and so on. You can also explicitly set the values:

```c
typedef enum Day {
    SUNDAY = 1,
    MONDAY = 2,
    TUESDAY = 3,}day_t;
```

// used in switch statements

---
## Unions in C
- similar to structs, but all members share the same memory location.
- only one member can hold a value at any given time.   

```c
typedef union Data {
    int i;
    float f;
    char str[20];
}data_t;
```