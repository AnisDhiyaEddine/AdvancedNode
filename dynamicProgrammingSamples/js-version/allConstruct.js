
const allContruct = (target, wordBank) => {
    if(target == '') return [[]];
    if(!wordBank.length) return [];

    let result = [];
    for(let word of wordBank) {
        if(target.indexOf(word) == 0) {
            const reminder = target.slice(word.length);
            const subResult = allContruct(reminder, wordBank);
            const targetWays = subResult.map( way =>  [word].concat(way));
            result = result.concat(targetWays);
        }
    }
    return result;
}

const allContructMem = (target, wordBank, memo = {}) => {
    if(target in memo) return memo[target];
    if(target == '') return [[]];
    if(!wordBank.length) return [];

    let result = [];
    for(let word of wordBank) {
        if(target.indexOf(word) == 0) {
            const reminder = target.slice(word.length);
            const subResult = allContructMem(reminder, wordBank, memo);
            const targetWays = subResult.map( way =>  [word].concat(way));
            result = result.concat(targetWays);
        }
    }
    memo[target] = result;
    return result;
}

const allConstructTab = (target, wordBank) => {
    const tab = Array(target.length + 1).fill([]);
    tab[0] = [[]];
    for(let i = 0; i <= target.length; i++) {
        for(let word of wordBank) {
            if(target.slice(i, i + word.length) == word) {
                tab[i + word.length] = tab[i + word.length].concat(tab[i].map( way =>  [word].concat(way)));
            }
        }
    }
    return tab[target.length];
}

    

/* console.log(allContruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // [["abc","def"]]
console.log(allContructMem("purple", ["purp", "p", "ur", "le", "purpl"]));   */


console.log(allConstructTab("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // [["abc","def"]]
console.log(allConstructTab("purple", ["purp", "p", "ur", "le", "purpl"]));  