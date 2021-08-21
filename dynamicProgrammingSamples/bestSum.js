
const bestSum = (target, collection) => {
    if(target == 0) return [];
    if(target < 0) return null; 

    const best = null;
    for(let num of collection) {
        const reminder = target - num;
        const result = bestSum(reminder, collection)
        if(result != null) {
            if(best == null || result.length < best.length) {
                best = [result, num];
            }
        }
    }
    return best;
}

const bestSumMem = (target, collection, memo = {}) => {
    if( target in memo) return memo[target];
    if(target == 0) return [];
    if(target < 0) return null; 

    let shortestCombination = null;
    for(let num of collection) {
        const reminder = target - num;
        const reminderCombination = bestSumMem(reminder, collection, memo);
        if(!reminderCombination) continue;
        const combination = [... reminderCombination, num];
        if(shortestCombination == null || combination.length < shortestCombination.length) {
            shortestCombination = combination;
        }
    }
    memo[target] = shortestCombination;
    return shortestCombination;
}


console.log(bestSumMem(100, [1,2,5,25]))  // ex: [25, 25, 25, 25]