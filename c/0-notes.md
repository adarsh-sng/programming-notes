
//doubts
        operator vs function

basic type in c;
    int 
    float
    char
    char*

common format specifier
    %d- digit(int)
    %f-floating point number
    %c-character
    %s-string(char *)

in cpp we have const

muunit and unit test

the size of data type is not same on every type of computer 
sizeof()
#ifndef and #pragma once 

// struct padding

the memory address that your code sees are not mostly not same as real physical address in  RAM because the OS provide a virtual memory space.


ifndef
---
in structs order matters  
use designated initializers

## Structs in C
 in struct no methods
```c
struct Point {
    int x;
    int y;
};

struct City{
    char *name;
    int lat;
    int lon;
}

// zero initialize a struct
struct City city = {0};
// designated initializer
struct City city = {.name="New York", .lat=40, .lon=-74};
// positional initializer
struct City city = {"New York", 40, -74};
// returning struct from function
struct Point make_point(int x, int y) {
    struct Point p;
    p.x = x;
    p.y = y;
    return p;
}

```
```c
typedef struct {
    char *name;
    int weight;
}pastry_t;

//or 
typedef struct Pastry {
    char *name;
    int weight;
}pastry_t;
```

```c
typdef struct Coordinates{
    int x;
    int y;
    int z;
}coordinates_t;
// array of struct
coordinates_t point[3] = {
    {1,2,3},
    {4,5,6},
    {7,8,9}
};
``` 
