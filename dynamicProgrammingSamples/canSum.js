
const canSum = (target, collection) => {
    if (target == 0) return true;
    if (target < 0) return false;

    for(let num of collection){
        const reminder = target - num;
        if (canSum(reminder, collection) == true) return true;
    }
    return false;
}

const canSumMem = (target, collection, memo = {}) => {
    if(target in memo) return memo[target];
    if (target == 0) return true;
    if (target < 0) return false;

    for(let num of collection){
        const reminder = target - num;
        memo[target] = canSumMem(reminder, collection, memo);
        if (memo[target] == true) return true;
    }
    memo[target] = false;
    return false;
}


/* console.log(canSum(5, [1, 2, 3, 4, 5])) // true
console.log(canSum(7, [2, 4])) // false
console.log(canSum(8, [2, 3, 5])) // true
console.log(canSum(300, [7, 14])) // false */

console.log(canSumMem(5, [1, 2, 3, 4, 5])) // true
console.log(canSumMem(7, [2, 4])) // false
console.log(canSumMem(8, [2, 3, 5])) // true
console.log(canSumMem(300, [7, 14])) // false 