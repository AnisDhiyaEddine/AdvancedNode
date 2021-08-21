
const howSum = (target, collection) => {
    if(!target) return [];
    if(target < 0) return null;

    for(let num of collection) {
        const reminder = target - num;
        const minimized = howSum(reminder, collection);
        if(minimized) {
            minimized.push(num);
            return minimized;
        }
    }
    return null;
}

const howSumMem = (target, collection, memo = {}) => {
    if(target in memo) return memo[target];
    if(!target) return [];
    if(target < 0) return null;

    for(let num of collection) {
        const reminder = target - num;
        const minimized = howSumMem(reminder, collection, memo);
        if(minimized) {
            minimized.push(num);
            memo[target] = minimized;
            return minimized;
        }
    }
    memo[target] = null;
    return null;
}

console.log(howSum(7, [2, 3])); // [3, 2, 2]
console.log(howSum(7, [2, 4])); // null
console.log(howSumMem(300, [7, 14])); // null