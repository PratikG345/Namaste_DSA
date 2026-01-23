 // Corner cases:
 // 1. What is array is empty or has only 1 element?
 // 2. What if my array contains nagative numbers?
 // 3. What if my array contains duplicates?
 
 function secondLargest(arr){
    if(arr.length<2){
        return null
    }
    let largest = -Infinity
    let secondLargest = -Infinity

    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            secondLargest = largest
            largest = arr[i]
        }
        else if(arr[i]>secondLargest && arr[i] != largest){
            secondLargest = arr[i]
        }
    }
    return secondLargest
 }

 arr = [20,20,10]

 res = secondLargest(arr)
 console.log(res) 

