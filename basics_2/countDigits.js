function countDigits(num){
    
    if(num==0) return 1

    num = Math.abs(num) 
    let count = 0
    while(num>0){
        num = Math.floor(num/10)
        count++
    }
    return count
}

// abs = absolute,changes -ve to +ve number, keeps +ve number +ve.
// ceil: Rounds up to the nearest integer.
// round: Rounds to the nearest integer.
// floor: Rounds down to the nearest integer.
console.log(countDigits(0))
