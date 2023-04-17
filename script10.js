//               0       1      2       3         4
let names = ["chinmay","ram","ramesh","satish","ranbir"]

console.log(names)
console.log(names[0])

// for loop 
console.log(names.length) // 5
for(let i = 0 ; i < names.length ; i++){
   // console.log(i)
    console.log(names[i])
}

// Javascript -- Object 
// Object - properties and methods 
// Method - action and return type 


// property - 
let cities = ["pune","mumbai","banglore","kolkata"]
console.log(cities.length)

// push()
// action - add the element at the last of array
// return - new length of array 

let q1 = cities.push("wardha")
console.log(q1)
console.log(cities)

// [ 'pune', 'mumbai', 'banglore', 'kolkata', 'wardha' ]
// unshift()
// action - add the element start of array
// return new lenth of array
let q2 = cities.unshift("goa")
console.log(q2)
console.log(cities)

// pop()
// action - remove the last element 
// return - returns the last element 

//                0        1        2          3         4
let cities2 = ["kanpur","jaipur","udaipur","chennai","lucknow"]
let q3 = cities2.pop()
console.log(cities2)
console.log(q3)

// shift()
// action - removes the first element 
// return - returns the first element
let q4 = cities2.shift()
console.log(cities2)
console.log(q4)

// push() , unshift() , pop() , shift()

// includes()
// action - search for array element 
// return - if found returns true else false
//              0           1         2           3       4
let cities3 = ["mumbai","wardha","chandrapur","indore","bhopal"]
let q5 = cities3.includes('mumbai')
console.log(q5)

// indexOf()
// action - serach for the element 
// return if found returns the indexOf of element 
// if not found return -1
let q6 = cities3.indexOf("indore")
console.log(q6)
let q7 = cities3.indexOf("Indore")
console.log(q7)

// reverse()
// action - reverse the element of array
// return - reversed array

let marks = [1,22,333,4444,55555]
let q8 =marks.reverse()
console.log(q8)

//at()
//[ 55555, 4444, 333, 22, 1 ]
let q9 = marks.at(3)
console.log(q9)

let fruits = ["apple","mango","banana","orange"]
let fruits2 = ["papaya","chikoo"]
let fruits3 = fruits.concat(fruits2)
let fruits4 = fruits2.concat(fruits)
console.log(fruits3)
console.log(fruits4)

let info = ["chinmay","deshpande",7709192441]

let q10 = info.join('-')
let q11 = info.join(' ')
let q12 = info.join('@')
console.log(q10)
console.log(typeof q10)
console.log(q11)
console.log(q12)











