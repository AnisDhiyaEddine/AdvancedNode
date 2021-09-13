// Recusive and tabulation method the memoization method for later

#include <iostream>
#include <vector>

using namespace std;

int fib(int n);
int fibTab(int n);

int main() {
    cout << "Hello the fib of 8 using simple recursion is : " << fib(8) << endl;
    cout << "Hello the fib of 8 using tabulation method is : " << fibTab(8) << endl;
    return 0;
}

int fib(int n){
    if(n < 2) return n;
    return fib(n-1) + fib(n-2);
}

int fibTab(int n){
    vector<int> tab;
    tab.assign(n+1, 0);
    tab[1] = 1;
    for(int i = 2; i <=n; i++){
        tab[i] = tab.at(i-1) + tab.at(i-2);
    }
    return tab[n];
}


/* const fibTab = (n) => {
    let tab = Array(n+1).fill(0);
    tab[1] = 1;
    for(let i=2; i <= n ; i++){
        tab[i] = tab[i-1] + tab[i-2];
    }
    return tab[n];
} */