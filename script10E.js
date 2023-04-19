
//              0          1        2       3
let names = ["chinmay", "ninad", "sarika", "poorva"]

// array stores the value by index

console.log(names[0]) // chinmay
console.log(names[1]) // ninad
console.log(names[2])
console.log(names[3])

// Javascript object
// Object -- properties and methods
// Method --- action and return type 

//              0         1         2         3       4
let cities = ["pune", "chennai", "banglore", "kolkata", "dubai"]
console.log(cities[0])

// Length
let q1 = cities.length
console.log(q1)

for (let i = 0; i < cities.length; i++) { // 1 // 2 // 3 // 4 // 5
   // console.log(i) // 0 , 1 , 2 , 3 ,4
    console.log(cities[i])
    // i = 0
    // i = 1
    // i = 2
    // i = 3
    // i = 4
    
}

// Methods 

// Gym 
// action - excercise
// return - health

//            0         1        2
let lang = ["hindi","english","marathi"]
console.log(lang)

//push()
//action - add the element at last
//return = new length of array

let q2  =lang.push("sanskrit")
console.log(q2)
console.log(lang)

//unshift()
// action - add the element at first 
// return - new length of array

let q3 = lang.unshift('maths')
console.log(q3)
console.log(lang)

//pop()
// action - removes the last element 
// return - lastElement 
//[ 'maths', 'hindi', 'english', 'marathi', 'sanskrit' ]

let q4 = lang.pop()
console.log(q4)
console.log(lang)

// shift()
// action - removes the first element 
// returns firstElement
//[ 'maths', 'hindi', 'english', 'marathi' ]

let q5 = lang.shift()
console.log(q5)
console.log(lang)

// includes ()

let fruits = ["apple","mango","banana","grapes"]
let q6 = fruits.includes('Apple')
let q7 = fruits.includes('apple')
console.log(q6)
console.log(q7)

// indexOf()

//fruits = ["apple","mango","banana","grapes"]
let q8 = fruits.indexOf("apple")
let q9 = fruits.indexOf("Apple")
console.log(q8)
console.log(q9)

// at()

let q10 = fruits.at(2)
console.log(q10)
let q11 = fruits.at(67)
console.log(q11)


//concat()
let numA = [11,22,33]
let numB = [44,55,66]

let q12 = numA.concat(numB)
let q13 = numB.concat(numA)
console.log(q12)
console.log(q13)

// join()
let info = ["chinmay","deshpande",7709192441]
let q14 = info.join(' ')  // "chinmay-deshpande-7709192441"
console.log(q14)
console.log(typeof q14)

// reverse()

let numbers = [99,88,77]
let q15  = numbers.reverse()
console.log(q15)


// Java / Python -- SQL --- Seleniun , Cypress

// Friday 
// Sat
// Sun 
// Mon




