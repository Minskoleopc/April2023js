// // lexical scope
// function additonA() {
//     let x = 10
//     let y = 15
//     console.log(x + y) // 25

//     function additionB() {
//         let s = 90
//         let t = 45
//         console.log(x + y) // 25
//         console.log(s + t)

//         function additionC() {
//             let r1 = 10
//             let r2 = 5
//             console.log(x + y + s + t)
//             console.log(r1+r2)
//         }

//         additionC()
//     }

//     additionB()
// }
// additonA()

// program2 

// number a parameter and number as return type 
function addA(x,y){
    return x + y
}
let q1 = addA(124,5)
console.log(q1)

// string as a parameter and string as return type
function greets(greet){
    return  `${greet} chinmay !`
}
let q2 = greets("Good Morning")
console.log(q2)

// boolean as parameter and boolean as return type 
function canDrive(age, haveVehicle){
    if(age && haveVehicle){
        return true
    }
}
let q3 = canDrive(18, true)
if(q3){
    console.log('Enjoy ride')
}
else {
    console.log("cannot drive")
}

// array as parameter and array as return type 
function lastFivetranctions(arr){
    return arr.slice(-5)
}
let q4 = lastFivetranctions([23,56,77,8,3,55,6,6,77,8,-89,88,98])
console.log(q4)

// object as a parameter and object as return type 
let info = {
    firstName:"chinmay",
    lastName:"deshpande"
}

function addCity(obj){
    obj.city = "pune"
    return obj
}
let q5 = addCity(info)
console.log(q5)

// function as a parameter and function as a return type


// function declaration 
function addA(x,y){
    return x + y
}
let j1 = addA(23,4)
console.log(j1)
// function expression 

let addB  = function(x,y){
    return x+y
}
let j2 = addB(3,4)
console.log(j2)

// arrow function

// let addC  = (x,y)=>{
//     return x+y
// }
// let j3 = addC(3,4)
// console.log(j3)

// let addC  = (x,y)=> x+y
// let j3 = addC(3,4)
// console.log(j3)


let subA = function(x,y){
    return x - y
}



function Subtraction(fn,x,y){

    // let fn = function(x,y){
    //     return x - y
    // }
    // let x = 22
    // let y = 4


    let c = fn(x,y) // 18
    return c // 18
}
let j3 = Subtraction(subA,22,4)
console.log(j3)

let addN = function(x,y){
    return x + y
}
function AdditionN(fn,x,y){
    // let fn = function(x,y){
    //     return x + y
    // }
    // let x = 12
    // let = 4
    let c2 = fn(x,y)
    return c2
}

let j4 = AdditionN(addN,12,4)
console.log(j4)


// Closures
function additonC(x,y){
    console.log(x+y) // 27
    return x + y
    console.log("hello")
}

let j5 = additonC(23,4)
console.log(j5) // 27

// function returning another function
function  additonD(){
    let x = 100
    let y  = 50
    return function(){
        console.log(x+y)
    }
}
let j6 = additonD()

// let j6 = function(){
//     console.log(x+y)
// }
console.log(j6)
j6()





















