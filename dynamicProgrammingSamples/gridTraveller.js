
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

const gridTravellerTab = (row, column)  => {
    let gridTravellerTab = Array(row+1).fill(null).map( el => el = Array(column+1).fill(0));
    gridTravellerTab[1][1] = 1;
    for(let i = 0; i <= row; i++) {
        for(let j = 0; j <= column; j++) {
            if(i+1 <= row) gridTravellerTab[i+1][j] += gridTravellerTab[i][j];
            if(j+1 <= column) gridTravellerTab[i][j+1] += gridTravellerTab[i][j];
        }
    }
    return gridTravellerTab[row][column];
}


/* console.log(gridTraveller(3, 3)) // 6
console.log(gridTraveller(18, 18)) // 137846528820
console.log(gridTraveller(1, 1)) // 1 */

/* console.log(gridTravellerMem(3, 3)) // 6
console.log(gridTravellerMem(18, 18)) // 137846528820
console.log(gridTravellerMem(1, 1)) // 1  */

console.log(gridTravellerTab(3, 3));
console.log(gridTravellerTab(18, 18)) // 137846528820
