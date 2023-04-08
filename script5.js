// conditional statement 

// one input and multiple outcomes

// numT > 0 && numT <= 5  --- 5 % discount 
// numT > 5 && numT <= 10 --- 10 % discount
// numT > 10              ---- 20 % discount

let numT = -1
// if(numT > 0 && numT <= 5){
//     console.log("5 % discount")
// }
// if(numT > 5 && numT <= 10){
//     console.log("10 % discount")
// }
// if(numT > 10){
//     console.log("30 % discount")
// }


// program 2
if(numT > 0 && numT <= 5){
    console.log("5 % discount")
}
else if(numT > 5 && numT <= 10){
    console.log("10 % discount")
}
else if(numT > 10){
    console.log("30 % discount")
}
else {
    console.log("incorrect input")
}


// program 3

let marks = 66

// if(marks > 90){
//     console.log("Grade A")
// }
// if(marks > 75){
//     console.log("Grade B")
// }
// if(marks > 65){
//     console.log("Grade C")
// }

// if(marks > 90){
//     console.log("Grade A")
// }
// else if(marks > 75){
//     console.log("Grade B")
// }
// else if(marks > 65){
//     console.log("Grade C")
// }
// else {
//     console.log("Fail ..please try again")
// }


// program 3

let a = 10
let b = 50
if(a > b ){
    console.log('a is greater')
}
else {
    console.log('b is greater')
}

// program 4
// Greatest of 3 numbers

let x = 100
let y = 500
let z = 2500

if(x > y && x > z){
    console.log('x is greatest')
}
else if(y > x && y > z){
    console.log('y is greater')
}
else {
    console.log('z is greater')
}

// program5
// Tenary operator

let s = 8
let t = 40

// if(s > t){
//     console.log('s is greater')
// }
// else {
//     console.log('t i greater')
// }

s > t?console.log('s is greater'):console.log('t is greater')

let age = 17
let q1 = age >= 18 ? "candrive":"cannotdrive"
console.log(q1)


























// if(condition){
//     // statement
// }
// else {
//     // statement
// }





