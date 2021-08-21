
const gridTraveller =  (n, m)  => {
    if(! (n && m)) return 0;
    if(n === 1 || m === 1) return 1;
    return gridTraveller(n-1, m) + gridTraveller(n, m-1);
}

const gridTravellerMem = (n, m, memo = {})  => {
    if(memo[`${n}_${m}`]) return memo[`${n}_${m}`];
    if(! (n && m)) return 0;
    if(n === 1 || m === 1) return 1;
    memo[`${n}_${m}`] = gridTravellerMem(n-1, m, memo) + gridTravellerMem(n, m-1, memo);
    return memo[`${n}_${m}`];
}


/* console.log(gridTraveller(3, 3)) // 6
console.log(gridTraveller(18, 18)) // 137846528820
console.log(gridTraveller(1, 1)) // 1 */

console.log(gridTravellerMem(3, 3)) // 6
console.log(gridTravellerMem(18, 18)) // 137846528820
console.log(gridTravellerMem(1, 1)) // 1