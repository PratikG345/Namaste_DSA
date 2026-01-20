const { ClippingGroup } = require("three/webgpu")

function hello100(){
    for(let i = 0; i < 100; i++ ){
        console.log("hello World")
    }
}

// hello100()

//    for(initialization;condition;chnage(increment or decrement)){code}

// i++(i=i+1)
for(let i=0;i<20;i++){
    console.log(i)
}

// array and loop
let arr = [12,423,2,57,2]
    // console.log(arr[1])

    let length = arr.length

for(let i=0;i<length;i++){
    console.log(arr[i])
}

for(let i=0;i<length;i++){
    if(i%2==0){
        console.log(arr[i])
    }
}