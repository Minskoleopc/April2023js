
// program 1
let birthYear2 = [2000,2001,2002,2003]
let ages = []
// [23,22,21,20]
for(let i = 0 ; i < birthYear2.length ; i++){
    //console.log(i)
    //console.log(birthYear[i])
    //console.log(2023-birthYear[i])
    let q1 = 2023-birthYear2[i]
    ages.push(q1)
}
console.log(ages)


// program2
//                0    1    2     3
let birthYear = [2000,2001,2002,2003]
let q2 = birthYear.map(function(el,index,arr){
    //console.log(el,index,arr)
    return 2023 - el 
})
console.log(q2)


// program 3
let numbers = [1,2,3,4,5,6,7,8,9,10]
let q3 = numbers.map(function(el ,index, arr){
    return el * 2
})
console.log(q3)

// program 4
let mks = [77,88,99,50,66,63]
let above50 = []
for(let i = 0 ; i < mks.length ; i++){
    // console.log(i)
    // console.log(mks[i])
    if(mks[i] > 50){
        above50.push(mks[i])
    }
}
console.log(above50)

// program 5
let q4 =mks.filter(function(el,index,arr){
    return el > 50
})
console.log(q4)

let numberB = [34,55,22,34,55,66]
let q5 = numberB.filter(function(el,index,arr){
    return el % 2 == 0 
})
console.log(q5)

// program 6

let markss = [11,22,33]
let total = 0

for(let i = 0 ; i < markss.length ; i++){
    total = total + markss[i]
    //       0    +   11     // 11
    //       11   +   22     // 33
    //       33   +   33    // 66
}
console.log(total)

// program 6

//markss.reduce(fn,0)
let q6 = markss.reduce(function(acc, el,index,arr){
    return acc + el // 33
},0) 
console.log(q6)

// program 7

let cities = ["pune","nagpur","wardha"]
for(let i = 0 ; i < cities.length ; i++){
    console.log(i)
    console.log(cities[i])
    console.log("welcome "+ cities[i])
}


// program 8
let q8 = cities.forEach(function(el,index,arr){
    console.log("welcome",el)
})
console.log(q8)

// map()
// filer()
// reduce()
// forEach()

