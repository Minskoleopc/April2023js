let birthYear  = [1989,1990,1991,1992]
// [34,33,32,31]
let ages = []

for(let i = 0 ; i < birthYear.length ; i++){
    // console.log(i)
    // console.log(birthYear[i])
    // console.log(2023 -birthYear[i])
    let t = 2023 -birthYear[i]
    ages.push(t)
}
console.log(ages)


// map()
// birthYear.map(function(el,index,arr){
//     console.log(el,index,arr)
// })

let r1 = birthYear.map(function(el,index,arr){
    return 2023 - el
})
console.log(r1)

// program 2
let table = [1,2,3,4,5,6,7,8,9,10]
// [2,4,6,8,10,12,14,16,18,20]
let r2 = table.map(function(el,index,arr){
    return el * 2
})
console.log(r2)



// program 3
let marks = [12,33,55,66,77,34]
let above50 = []
//[55,66,77]

for(let i = 0 ; i < marks.length ; i++){
    if(marks[i]>50){
        above50.push(marks[i])
    }
}
console.log(above50)

//filter()
let r3 = marks.filter(function(el,index,arr){
    return el > 50
})
console.log(r3)

// program 3

let mks = [11,22,33]
let total = 0

for(let i = 0 ; i < mks.length ; i++){
    total = total + mks[i]
    //       0    +    11  ====> 11
    //       11   +    22  ====> 33
    //       33   +    33  ====> 66 
}
console.log(total)

// reduce()
//mks.reduce(fn,accVal)

let r5 = mks.reduce(function(acc,el,index,arr){
    return acc + el 
},5)
console.log(r5)

// program 4

let cities = ["pune","delhi","banglore","kolkalta"]
for(let i = 0 ; i < cities.length ; i++){
    console.log("welcome "+cities[i])
}

cities.forEach(function(el,index,arr){
    console.log("welcome "+ el)
})


