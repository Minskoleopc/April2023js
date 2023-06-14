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
















