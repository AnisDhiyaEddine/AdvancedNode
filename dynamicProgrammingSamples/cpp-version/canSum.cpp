#include <iostream>
#include <vector>

using namespace std;

bool canSum(int target, vector<int> collection);
bool canSumTab(int target, vector<int> collection);


int main(){
    vector<int> tab1{1, 2, 3, 4, 5};
    vector<int> tab2{2, 4};
    cout << "Recursion method result on (5,[1, 2, 3, 4, 5]) && (7,[2, 4])" << endl;
    cout << canSum(5, tab1) << endl; // true
    cout << canSum(7, tab2) << endl; // false
    cout << endl;
    cout << "Tabulation method result on (5,[1, 2, 3, 4, 5]) && (7,[2, 4])" << endl;
    cout << canSum(5, tab1) << endl; // true
    cout << canSum(7, tab2) << endl; // false
    return 0;
}

bool canSum(int target, vector<int> collection){
    if (target == 0) return true;
    if (target < 0) return false;

    for(int i = 0; i < collection.size(); i++){
        int reminder = target - collection.at(i);
        if (canSum(reminder, collection)) return true;
    }
    return false;
}

bool canSumTab(int target, vector<int> collection){
    vector<bool> tab;
    tab.assign(target + 1, false);
    tab[0] = true;
    for(int i=0; i <= target; i++){
        if(!tab.at(i)) continue;
        for(int num=0; num < collection.size(); i++){
            tab[i + num] = true;
        }
    }
    return tab.at(target);
}

