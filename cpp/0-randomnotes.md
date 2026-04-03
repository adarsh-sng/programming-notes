# C++ Notes

## Compilers
`c++` is a symbolic link to either `g++` or `clang++` on most Linux distros.

Check which: `ls -l $(which c++)` or `c++ --version`

## Compilation
```bash
c++ io.cpp -o io --save-temps
```
`--save-temps` keeps intermediate files (`.ii` files, etc.)

## char**

Just like a single string (char*) stops when it hits an invisible \0 (null character), an array of strings (char**) often relies on a NULL pointer to mark the end.

Instead of pointing to a valid string, the very last slot in the array is explicitly set to NULL (or nullptr in modern C++). When you write a loop to read the array, you check each pointer. The moment you see NULL, you know you've reached the end of the list and should break the loop.