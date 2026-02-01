// remove last digit - num / 10
// find last digit - num % 10
//121
function palindrome(num){
    let rev=0
    while(num>0){
        last = num%10
        rev = rev*10 + last
        num = Math.floor(num/10)
    }
    if(rev == num){
        return "is palindrome"
    }
    else{
        return "is not palindrome"
    }
}

console.log(palindrome(121))