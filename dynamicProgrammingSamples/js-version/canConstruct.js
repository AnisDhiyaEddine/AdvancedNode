
const canConstruct = (target, wordBank) => {
    if(target === '') return true;
    if( !wordBank.length ) return false; 
    for(let el of wordBank) {
        if(target.indexOf(el) === 0) {
            const reminder = target.slice(el.length);
            if(canConstruct(reminder, wordBank)) return true;
        }
    }
    return false;
}

const canConstructMem = (target, wordBank, memo = {}) => {
    if(target in memo) return memo[target];
    if(target === '') return true;
    if( !wordBank.length ) return false; 
    for(let el of wordBank) {
        if(target.indexOf(el) === 0) {
            const reminder = target.slice(el.length);
            if(canConstructMem(reminder, wordBank, memo)){
                memo[target] = true;
                return true;
            }
        }
    }
    memo[target] = false;
    return false;
}

const canConstructTab = (target, wordBank) => {
    const tab = Array(target.length + 1).fill(false);
    tab[0] = true;
    for(let i = 0; i <= target.length; i++) {
        if(! tab[i]) continue;
        for(let word of wordBank) {
            const reminder = target.slice(i, i + word.length);
            if(reminder === word) {
                tab[i + word.length] = true;
            } 
        }
    }
    return tab[target.length];
}

/* console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true
console.log(canConstruct("ab", ["ab", "abc", "abcd"])); // true
console.log(canConstructMem("eeeeeeeeeeeeeeeeeeeeeeeeeeeef",
 [
     "e", "ee", "eee", "eeee", "eeeee", "eeeeee", "eeeeeee", "eeeeeeee", "eeeeeeeee", "eeeeeeeeee"
])); // false */

console.log(canConstructTab("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true
console.log(canConstructTab("ab", ["ab", "abc", "abcd"])); // true
console.log(canConstructTab("eeeeeeeeeeeeeeeeeeeeeeeeeeeef",
 [
     "e", "ee", "eee", "eeee", "eeeee", "eeeeee", "eeeeeee", "eeeeeeee", "eeeeeeeee", "eeeeeeeeee"
])); // false 