
//            0         1         2       3
let names = ["chinmay","poorva","satish","ram"]

// property 

let a = names.length
console.log(a)

// method

names.push("abhisha")
names.unshift('amol')
console.log(names)
names.pop()
names.shift()
console.log(names)

// push() , pop() , shift() , unshift()

//             0        1          2         3
let  city = ["pune","bangalore","kolkata","chennai"]

let q1 = city.includes('Pune')
let q2 = city.includes('pune')
console.log(q1)
console.log(q2)

let q3 = city.indexOf('nagpur')
let q4 = city.indexOf('chennai')
console.log(q3)
console.log(q4)

let q5  = city.at(2)
console.log(q5)

let numsA = [11,22,33]
let numsB = [44,55,66]
console.log(numsA.concat(numsB))
console.log(numsB.concat(numsA))


let info = ["chinmay","deshpande",7709192441]
let q6 = info.join(' ')
console.log(q6)

let country = ["india","bangladesh","srilanka","cuba"]
let q7 = country.sort()
console.log(q7)

let q8 = country.reverse()
console.log(q8)


// map() , filter(), reduce(), forEach() , find(), findIndex(), some() , every()


let numbers = [11,2,3,44,55,66]
let q9 = numbers.map(function(el,index,arr){
    return el - 1
})
console.log(q9)

let trans = [11,22,33,-99,77,88,44,55,-89]

let pos = trans.filter(function(el,index,arr){
    return el > 0
})
let neg = trans.filter(function(el,index,arr){
    return el < 0
})
console.log(pos)
console.log(neg)

let mks = [21,22,33]
let q10 = mks.reduce(function(acc,el,index,arr){
    return el + acc
},0)
console.log(q10)


let animals = ["lion","tiger","rabbit"]
animals.forEach(function(el,index,arr){
    console.log("i love "+ el)
})


let ns = [44,55,66,22,34,56,77]

let q11 =ns.filter(function(el,index,arr){
    return el > 40
})
console.log(q11)

let q12 =ns.find(function(el,index,arr){
    return el > 40
})
console.log(q12)


let q13 =ns.findIndex(function(el,index,arr){
    return el > 40
})
console.log(q13)


let q14 = ns.every(function(el,index,arr){
    return el > 40
})
console.log(q14)

let q15 = ns.some(function(el,index,arr){
    return el > 100
})
console.log(q15)




// slice()

// splice()

// fill()

//flat()

//              0        1        2       3         4       5
let fruits = ["apple","mango","banana","grapes","chikoo","papaya"] 
//              -6      -5    -4          -3          -2       -1

console.log(fruits.slice(3))
console.log(fruits.slice(1,5))
console.log(fruits.slice(-6,-1))
console.log(fruits.slice(-6,5))
console.log(fruits.slice(1,-1))
console.log(fruits.slice(-1,-4))

fruits.pop()
fruits.shift()
//fruits.splice(3,1)
fruits.splice(3,1,"jackfruit")

let kl = [[11,22,33],[44,55,6],[88,99,100]]
let aa = kl.flat()
console.log(aa)

//        0   1  2  3 4  5  6  7
let j  = [22,33,44,55,66,77,88,99]
//j.fill('null',1)
console.log(j.fill('null',1,5))

// revise -- 30 minutes











