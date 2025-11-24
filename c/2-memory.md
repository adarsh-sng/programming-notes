stack is simple and faster than heap allocation because it involves just moving the stack pointer. However, stack memory is limited in size and is automatically freed when the function exits.

heap is slower and more complex to manage because it requires dynamic memory allocation and deallocation using functions like malloc() and free(). Heap memory is larger and can be used for data that needs to persist beyond the scope of a function, but it requires careful management to avoid memory leaks and fragmentation.

---
### void pointers
- a special type of pointer that can point to any data type.
- used for generic data handling in functions.