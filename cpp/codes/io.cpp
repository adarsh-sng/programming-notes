#include <iostream>
#include <stdio.h>
#include <vector>
#include <bits/stdc++.h>
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
  auto i =2;
  std::vector<std::string>v ={"hello","hii"};
  for(auto i:v){
    std::cout<<i<<std::endl;
  }
  return 0;
}
