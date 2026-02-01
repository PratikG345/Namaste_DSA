function revInt(num){
     let numCopy = num;
     let rev = 0;
     num = Math.abs(num)
     let limit = 2**31;
     if(num>limit || num< -limit){
        return 0;
     }
     while(num > 0){
        let last = num % 10;
        rev = rev*10 + last;
        num = Math.floor(num / 10);
     }
     if(numCopy>0){
        return rev;
     }
     else{
        return -rev;
     }
}

console.log(revInt(112010))