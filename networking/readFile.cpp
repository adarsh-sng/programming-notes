#include <fstream>
#include <iostream>
#include <vector>
using namespace std;
int main(int argc, char **argv) {
  try {
    ifstream inf{"message.txt", ios::binary};
    if (!inf) {
      cout << "something went wrong";
      return 1;
    }
    vector<string> v;
    string line{};
    char ch[8];
    while (true) {
      inf.read(ch, sizeof(ch));
      streamsize n = inf.gcount();
      if (n == 0)
        break;
      // cout<<"read: ";
      // cout.write(c,n);
      line += string(ch, n);
      for (char c : line) {
        if (c == '\n') {
          v.push_back(line);
          line = "";
        }
      }
      // cout<<endl;
    }
   for(string s:v){
    cout<<"Read: "<<s<<endl;
   }
  } catch (exception &e) {
    cerr << e.what() << endl;
    return 1;
  }
}