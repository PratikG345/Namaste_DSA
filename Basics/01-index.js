console.log("Hello World")
console.log("Pratik 1")
console.log("Pratik 2")

// datatypes : string, number , boolean  
let fname = "Pratik";
let lname = "Gaikwad";
let fullname = fname + " " + lname
console.log(fullname)
// if you are runnig any js code, it can only be exeuted in js engine , js engine understand yor code and executes it line by line


// array   0  1  2    3  4
let arr = [2,536,353,643,3]
console.log(arr)
console.log(arr[3])
console.log(arr[9])
let sum = arr[0] + arr[4]
console.log(sum)

// strings array
let arrs = ["Akshay", "Virat", "Dhoni"]

// arrays can contain array also
let arr1 = ["pratik",5,6,[7,8,[9,10,11]]]
console.log(arr1[3])
console.log(arr1[3][1])
console.log(arr1[3][2][1])


// objects in js
// created by curly braces, in key-value pair

let obj = {
    a:7,
    Name:"Akshay",
    bool:true,
    arr:[9,10,11]
}
console.log(obj.bool)
console.log(obj.arr[1])
