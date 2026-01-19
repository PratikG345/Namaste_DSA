function printHelloWorld(){
    console.log("Hello World")
}

printHelloWorld()

function greet(name){
    console.log("Namaste," + name)
}

greet("Pratik")
greet("Soham")

// function to add 2 numbers
function add(num1,num2){
    console.log("Addition = " + (num1+num2))
}
//function to multiply 2 numbers
function multi(num1,num2){
    product = num1 * num2
    console.log("Mulitplication = " + product)
}
// square
function square(x){
    let result = x*x
    return result
}
add(10,20)
multi(10,20)
console.log(square(16)) 

// ---------------------if else----------------------
function eligibleToVote(age){
    if (age<1){
        console.log("Invalid Age")
    }
    else if (age<18){
        console.log("Not Eligible")
    }
    else{
        console.log("Eligible")
    }
}

eligibleToVote(25)
eligibleToVote(16)
eligibleToVote(-1)

// Create a function to check if a number is even or odd
function evenOdd(num){
    if (num%2==1){
        console.log("Odd")
    }
    else{
        console.log("Even")
    }
}

evenOdd(42)