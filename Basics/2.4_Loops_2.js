
// write a function that searches for an element in a array and returns the index, and if the element is not present just return -1.
function searchElement(arr,key){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==key){
            return i
        }
    }
    return -1
}
console.log(searchElement([23,5,1,5,9],19))

// Write a function that returns the number of negative numbers in an array
function negativeCount(arr){
    let count=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]<0){
            count++
        }
    }
    return count;
}

let arr = [0,-3,53,6,-1,9,-3]
console.log(negativeCount(arr))

//