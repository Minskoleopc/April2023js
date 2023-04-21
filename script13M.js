// Program 

// map() 
// works with every element of array 
// return array 

// program 1
let birthYear = [2000,2001,2002,2003,2004]
birthYear.map(function(el,index,arr){
    console.log(el,index,arr)
})

// program 2
let q1 = birthYear.map(function(el,index,arr){
    return 2023 - el
})
console.log(q1)

let numbers = [11,22,33,44,55,66,77,88,99,100]
let q2 = numbers.map(function(el,index,arr){
    return el + 2
})
console.log(q2)

// program 3

let marks = [44,55,66,22,33,55,66,77,88]
let q3 = marks.filter(function(el,index,arr){
    return el > 50
})
console.log(q3)


// program 4
let nEO = [11,22,33,44,55,22,33,44,66,88,100]
let q4  = nEO.filter(function(el,index,arr){
    return el % 2 == 0
})
console.log(q4)

// program 5
let sum = [11,22,32]
//sum.reduce(fn,0)
let q5 = sum.reduce(function(acc,el,index,arr){
    return acc + el // 33
},0)
console.log(q5)

// program 6
let city = ["mumbai","pune","solapur","nagpur"]
let q6 = city.forEach(function(el,index,arr){
    console.log("welcome "+ el)
})
console.log(q6)

// program 7

//         0  1  2  3  4
let mks = [66,77,88,99,100]
let q7 = mks.filter(function(el,index,arr){
    return el > 80
})
console.log(q7)

// find()
let q8 = mks.find(function(el,index,arr){
    return el > 80
})
console.log(q8)

// findIndex()
let q9 = mks.findIndex(function(el,index,arr){
    return el > 80
})
console.log(q9)

mks = [66,77,88,99,100]

// every()
let q10 = mks.every(function(el,index,arr){
    return el > 100
})
console.log(q10)

//some()
let q11 = mks.some(function(el,index,arr){
    return el >= 1000
})
console.log(q11)

// map()
// filter()
// reduce() ----> acc,el,index ,arr  , 0
// forEach()
// find()
// findIndex()
// some()
// every() 






















