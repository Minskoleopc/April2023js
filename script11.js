//                0     1   2    3
let birthYear = [1989,1990,1991,1992]
let ages = [] // [34,33,32,31]
// [2023-1989,2023-1990,2023-1991,2023-1992]
// [34,33,32,31]
for(let i = 0 ; i < 4 ; i++){
    //console.log(i)
    //console.log(birthYear[i])
    //console.log(2023 - birthYear[i])
    let t = 2023 - birthYear[i] // 31
    ages.push(t)
}
console.log(ages)

// program 2
//                0      1    2   3
let birthYear2 = [2000,2001,2002,2003]
let ages2 = [] 

// [2023-2000, 2023 - 2001,2023 -2002 , 2023 - 2002]
// [23,22,21,20]

for(let i = 0 ; i < 4 ; i++){ //1 // 2 // 3 // 4
    //console.log(i) // 0 , 1 , 2 , 3
    //console.log(birthYear2[i])
    //console.log(2023 - birthYear2[i])
    let t2 = 2023 - birthYear2[i]
    ages2.push(t2)
}
console.log(ages2)

// program 3
let marks = [45,66,77,88,40]
let above60 = [] // [66,77,88]
//[66,77,88]
for(let i = 0 ; i < marks.length ; i++){
    //console.log(i)
    //console.log(marks[i])
    if(marks[i] > 60){
        above60.push(marks[i])
    }
}
console.log(above60)

// program 4

let mks = [11,22,33]
let total = 0

// 11 + 22 + 33 =====> 66
for(let i = 0 ; i < mks.length ; i++){
   // console.log(i)
   //console.log(mks[i])
   total = total + mks[i]
   //      0     +   11     =======> 11
   //      11    +   22     =======> 33
   //      33    +   33     =======> 66 
}
console.log(total)

// program 5

let cities = ["pune","nagpur","kolkata"]

for(let i = 0 ; i < cities.length ; i++){
    //console.log(i)
   // console.log(cities[i])
    console.log("welcome "+ cities[i])
}

function addition(x,y){
    console.log(x+y)
    return x+y
}
let x = addition(23,4)
console.log(x)


// return document.title










