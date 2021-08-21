
const countConstruct = (target, wordBank) => {
    if(target === '') return true;
    if(!wordBank.length) return false;
    let total = 0;

    for( let word of wordBank ) {
        if( target.indexOf(word) == 0 ) {
            const reminder = target.slice(word.length);
            if( countConstruct(reminder, wordBank) ) {
                total++;
            }
        }
    }
    return total;
}

const countConstructMem = (target, wordBank, memo = {}) => {
    if( target in memo ) return memo[target];
    if(target === '') return true;
    if(!wordBank.length) return false;
    let total = 0;

    for( let word of wordBank ) {
        if( target.indexOf(word) == 0 ) {
            const reminder = target.slice(word.length);
            if( countConstructMem(reminder, wordBank, memo) ) {
                total++;
            }
        }
    }
    memo[target] = total;
    return total;
}

console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // 1
console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"])); // 2
console.log(countConstructMem("eeeeeeeeeeeeeeeeeeeeeeeeeeeef",
 [
     "e", "ee", "eee", "eeee", "eeeee", "eeeeee", "eeeeeee", "eeeeeeee", "eeeeeeeee", "eeeeeeeeee"
])); // 0