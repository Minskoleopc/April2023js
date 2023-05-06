//               0         1        2         3        4
let names  = ["chinmay","poorva","satish","sameer","ramesh"]


console.log(names[0])
console.log(names[1])

// JS   object 
// Property 
// Method


names  = ["chinmay","poorva","satish","sameer","ramesh"]
let q1 = names.length
console.log(q1)

// push()
let q2 = names.push('raj')
console.log(q2)
console.log(names)

// unshift()

let q3 = names.unshift('sameer')
console.log(q3)
console.log(names)


// pop()

let q4 = names.pop()
console.log(q4)
console.log(names)

// shift()
let q5  = names.shift()
console.log(q5)
console.log(names)

// includes()
let q6 = names.includes('Satish')
let q7 = names.includes('satish')
console.log(q6)
console.log(q7)

// indexOf()
let q8 = names.indexOf("poorva")
let q9 = names.indexOf("Poorva")

console.log(q9)
console.log(q8)

// at()
let q10 = names.at(2)
console.log(q10)


//  map() , filter() , reduce() , forEach()
//  find() , findIndex() , some() , every()


let birthYear = [1989,1990,1991,1990]
// [34,33,32,31]
// 2023 - 1989 --. 34

let q11 = birthYear.map(function(el,index,arr){
    //console.log(el,index,arr)
    return 2023 - el
})
console.log(q11)

let numbers = [1,2,3,4,5,6,7,8,9,10]
// [2,4,6,8,10,12,14,16,18,20]

let q12 = numbers.map(function(el,index,arr){
    return el * 2
})
console.log(q12)

// filter ()
let marks = [33,44,11,23,44,55,66]
// [44,44,55,66]
let q13 = marks.filter(function(el,index,arr){
    return el > 40
})
console.log(q13)

let city = ["pune","mumbai","nashik","nagpur","jalgoan"]

let q14 = city.filter(function(el,index,arr){
    return el.length > 5
})
console.log(q14)
