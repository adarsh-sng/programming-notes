# C++ Notes

## Compilers
`c++` is a symbolic link to either `g++` or `clang++` on most Linux distros.

Check which: `ls -l $(which c++)` or `c++ --version`

## Compilation
```bash
c++ io.cpp -o io --save-temps
```
`--save-temps` keeps intermediate files (`.ii` files, etc.)