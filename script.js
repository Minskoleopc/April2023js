
// variables 
// let  and const 
// Difference with respective to assignment

// let keyword
let balance = 0
console.log(balance)
console.log(typeof balance)

balance = 80
console.log(balance)

// const keyword 
const pi = 3.14
console.log(pi)
//pi = 78.8


// comments 
// for infomation
// for trying differnt code with deleting the previous one
// comment the code


// single line 
/*
    This is called as 
    multiline comment in javascript
*/


// Arithmetic operation 
// + , - , * , / ,%


// program 2

let x = 100
let y = 50

console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)
console.log(x%y)


console.log(22 % 5) // 2


let s = 10
let t = 5

console.log(s+t)
console.log(s-t)
console.log(s*t)
console.log(s/t)
console.log(s%t)
// 10 ---- 50 lines DRY(donot repeat yourself)


/*

    function - keyword

    Calculator - functionName

    () -- parenthesis

    x,y parameter

    {  blocks

        // statments
    }

    //Calculator(10,5) calling function with arguments

*/
function Calculator(x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
    console.log(x/y)
    console.log(x%y)
}

Calculator(8,4)
Calculator(10,5)


// program 2
// function without parameter and without return type 
function addA(){
    console.log(9+8)
}
addA()
addA()
addA()
addA()
addA()

// function with parameter and without return type
function addB(x,y){
    //console.log(x+y,x-y,x*y,x/y,x%y)
    console.log(x+y)
}
addB(12,6)
addB(10,5)

// program 4
// 100 - shown 
// 100 - given 

function addC(x,y){
    return x + y
}
let q1 = addC(7,3)
console.log(q1)
console.log(q1+q1)
console.log(q1*0.10)















