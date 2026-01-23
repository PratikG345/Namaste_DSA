 function secondLargest(arr){
    let largest = -Infinity
    let secondLargest = -Infinity

    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            secondLargest = largest
            largest = arr[i]
        }
        else if(arr[i]>secondLargest){
            secondLargest = arr[i]
        }
    }
    return secondLargest
 }

 arr = [4,9,0,2,8,7,1]

 res = secondLargest(arr)
 console.log(res) 