// conditional statements 

// numT > 0 && numT <=5      // 5 % discount
// numT > 5 && numT <= 10    // 10 % discount
// numT > 10                 // 20 % discount 

// syntax
// if(condition){
//     // statement
// }
// else {
// // statement
// }

let numT = -15

// if(numT > 0 && numT <= 5){
//     console.log('5 % discount')
// }
// if(numT > 5 && numT <= 10){
//     console.log('10 % discount')
// }
// if(numT > 10){
//     console.log('30 % discount')
// }

// if(numT > 0 && numT <= 5){
//     console.log('5 % discount')
// }
// else if(numT > 5 && numT <= 10){
//     console.log('10 % discount')
// }
// else if(numT > 10){
//     console.log('30 % discount')
// }
// else {
//     console.log('incorrect input')
// }


// program 3


let marks  = 66
// if(marks > 90){
//     console.log('grade A')
// }
// if(marks > 75){
//     console.log('grade B')
// }
// if(marks > 65){
//     console.log('grade C')
// }

// if(marks > 90){
//     console.log('grade A')
// }
// else if(marks > 75){
//     console.log('grade B')
// }
// else if(marks > 65){
//     console.log('grade C')
// }
// else {
//     console.log('Try again')
// }

// program 3

let a  = 10 
let b = 5
if(a > b){
    console.log('a is greater')
}
else {
    console.log('b i greater')
}

// program 4

let x = 10
let y = 50
let z = 300

if(x > y && x > z){
    console.log('x is greater')
}
else if(y > x && y > z){
    console.log('y is greater')
}
else {
    console.log('z is greater')
}

// program 5
// Tenary operaror
let s = 10
let t = 50
// if(s > t){
//     console.log('s is greater')
// }
// else {
//     console.log('t is greater')
// }
s > t ?console.log('s is greater'):console.log('t is greater')

// program 6
let age = 17
let q1 = age >= 18 ? "can drive":"cannot drive"
console.log(q1)










