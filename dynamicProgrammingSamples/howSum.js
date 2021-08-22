
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

const howSumTab = (target, collection) => {
    const tab = Array(target + 1).fill(null);
    tab[0]= [];
    for(let i= 0 ; i <= target ; i++) {
        for(let num of collection){
            if(tab[i]){
                tab[i+num] = tab[i].concat(num);
            }
        }
    }
    return tab[target];
}

/* console.log(howSum(7, [2, 3])); // [3, 2, 2]
console.log(howSum(7, [2, 4])); // null
console.log(howSumMem(300, [7, 14])); // null */

console.log(howSumTab(7, [2, 3])); // [3, 2, 2]
console.log(howSumTab(7, [2, 4])); // null
console.log(howSumTab(300, [7, 14])); // null