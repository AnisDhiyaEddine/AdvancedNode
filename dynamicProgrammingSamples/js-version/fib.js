
const fib = (n) => {
    if (n < 2) return n;
    return fib(n - 1) + fib(n - 2);
};



const fibMem = (n, memo = {}) => {
    if(memo[n]) return memo[n];
    if (n < 2) return n;
    memo[n] = fibMem(n - 1, memo) + fibMem(n - 2,memo );
    return memo[n];
}

const fibTab = (n) => {
    let tab = Array(n+1).fill(0);
    tab[1] = 1;
    for(let i=2; i <= n ; i++){
        tab[i] = tab[i-1] + tab[i-2];
    }
    return tab[n];
}

//console.log(fib(50));
console.log("Fibonacci memoized : " + fibTab(50));
console.log("Fibonacci tabulated : " + fibTab(50));