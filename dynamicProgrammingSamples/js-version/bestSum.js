
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

const bestSumTab = (target, collection) => {
    const tab = Array(target + 1).fill(null);
    tab[0] = [];
    for(let i = 0; i <= target ; i++ ){
        if(!tab[i]) continue;
        for(let num of collection){
           const combination = tab[i + num] ? tab[i+num] : [...tab[i], num];
           if(!tab[i + num] || combination.length < tab[i + num].length) tab[i + num] = combination;
        }
    }
    return tab[target];
}


//console.log(bestSumMem(100, [1,2,5,25]))  // ex: [25, 25, 25, 25]
console.log(bestSumTab(100, [1,2,5, 25]))  // ex: [25, 25, 25, 25]