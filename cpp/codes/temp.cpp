#include <bits/stdc++.h>
using namespace std;

int main() {
    string s = R"({"hello":"world" ,"hello":"world","hello":"world"})";
    s = s.substr(1, (int)s.size() - 2);
    vector<pair<string, string>> res;
    int n = (int)s.size();
    int i = 0;
    while (i < n) {
        int key_start = s.find('"', i) + 1;
        int key_end = s.find('"', key_start);
        string key = s.substr(key_start, key_end - key_start);
        int colon = s.find(':', key_end);
        int val_start = s.find('"', colon) + 1;
        int val_end = s.find('"', val_start);
        string val = s.substr(val_start, val_end - val_start);
        res.emplace_back(key, val);
        i = val_end + 1;
    }
    for (auto &p : res)
        cout << p.first << ' ' << p.second << '\n';

    return 0;
}
