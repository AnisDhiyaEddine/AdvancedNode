
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


console.log(fibMem(50));