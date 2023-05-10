
// let and const 
let c = 10
console.log(c)
c = 600
console.log(c)

// const 

const f = 100
console.log(f)
f = 68

// Arithmetic operation 

// + - * / %

let s = 10
let t = 5


console.log(s + t)
console.log(s - t)
console.log(s * t)
console.log(s / t)
console.log(s % t)


function Calculator(x, y) {
    console.log(x + y)
    console.log(x - y)
    console.log(x * y)
    console.log(x / y)
    console.log(x % y)
}
Calculator(20, 10)


function additionA() {
    console.log(9 + 9)
}
additionA()



function additionB(x, y) {
    console.log(x + y)
}
additionB(2, 3)


function additionC(x, y) {
    return x + y
}
let q1 = additionC(3, 5)
console.log(q1)
console.log(q2 * 0.10)

// comparison

// === , !==
// == , != 
// < . > , <= , <= , != 
console.log(6 === 6)
console.log(6 === '6')
console.log(6 != '6')
console.log(6 !== '6')

// Logical operator - && AND
//true  true  ---------------- true
//false true  ---------------  false
//true  false ---------------  false
//false  false --------------   false 



// Or operator - ||
//true  true  ---------------- true
//false true  ---------------  true
//true  false ---------------  true
//false  false --------------   false 


// Not 

// true  false
// false true

// considtional statement


let numT = 5

if (numT > 5 && numT <= 10) {
    console.log('5% discount')
}

else if (numT > 10 && numT <= 20) {
    console.log('10% discount')
}

else if (numT > 10) {
    console.log('15% discount')
}
else {

}

let a = 10
let b = 5
a > b ? console.log('a is greater') : console.log('b is greater')



// for loop 

// while loop


for (let i = 0; i <= 5; i++) {
    console.log(i)
}

for (let i = 0; i <= 5; i++) {
    if (i == 2) {
        break
    }
    console.log(i)
}


for (let i = 0; i <= 5; i++) {
    if (i == 2) {
        continue
    }
    console.log(i)
}

let j1 = 10

while (j >= 1) {
    console.log(j)
    j += 1
    // j++
    //j = j + 1
}


let a1 = [11, 22, 33, 44, 552, 2233, 444, 55]

// object --- property and method
// metho -- action and return type 


let info = {
    name: "chinmay",
    age: 23,
    rollNo: 34

}


// C   R   U  D


let x = 19
console.log(typeof x)



let y = true
console.log(typeof y)


let s1 = "chinmay"
console.log(typeof s1)


// String object 

let s11 = "map"

// Object 
// Object properties and method


class Person {

    constructor(fn, ln, age, rn) {
        this.firstName = fn
        this.lastName = ln
        this.age = age
        this.rn = rn
    }


}
let ad = new Person("chinmay", "deshpande", 34, 66)


let map = new Map([
    [1, "admin"],
    [2, "customer"],
    [3, "support"]
])

let a5 = new Set[ 34,55,66,66]
console.log(a5)














