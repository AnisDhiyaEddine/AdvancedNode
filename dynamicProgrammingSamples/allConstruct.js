
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
    

console.log(allContruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // [["abc","def"]]
console.log(allContructMem("purple", ["purp", "p", "ur", "le", "purpl"]));  