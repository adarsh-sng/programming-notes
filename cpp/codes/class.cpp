#include <stdio.h>
#include <iostream>
#include<string>
class foo{
  public:
  int val;
  std::string st;
};
int main(){
  // foo s1(23,"hello");
  foo s1(88,"h");
  std::cout<<s1.val<<"\n";
  std::cout<<s1.st<<"\n";
}