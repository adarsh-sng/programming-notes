#include <iostream>
#include <stdio.h>
using std::cin;
using std::cout;
#define no puts("NO")
#define yes puts("YES")
// using namespace std;
void printhello() {
  puts("func calling");
  no;
}
int main() {
  puts("hello adarsh this side");
  puts("NO");
  std::cout << "hello" << std::endl;
  printhello();
  std::pair lol{1, 2};
  return 0;
}
