// program
let birthYear = [2000,2001,2002,2003]
let q1 = birthYear.map(function(el,index,arr){
    return 2023 - el
})
console.log(q1)

// program2 

let marks = [55,66,22,88,44,55,66,22]
let q2 = marks.filter(function(el,index,arr){
    return el > 50
})
console.log(q2)

// program 3

let nums = [11,22,33]
let q3 = nums.reduce(function(acc,el,index,arr){
    return el + acc
},0)
console.log(q3)

// program 4

let cities = ["pune","nagpur","banglore","kolkata"]
cities.forEach(function(el,index,arr){
    console.log('welcome '+ el )
})


// ------------------------------------------------------

// find() , findIndex() , some() , every()

let numC = [55,66,77,44,55,66,88,99,22,66,99]
let q4 = numC.filter(function(el,index,arr){
    return el > 60
})
console.log(q4)

let q5 = numC.find(function(el,index,arr){
    return el > 60
})
console.log(q5)

let q6 = numC.findIndex(function(el,index,arr){
    return el > 60
})
console.log(q6)

let numD = [33,55,66,77,88,999]
let q7 = numD.every(function(el,index,arr){
    return el > 100
})
console.log(q7)

let q8 = numD.some(function(el,index,arr){
    return el > 9000
})
console.log(q8)



// 10  -- 
// 8  -- map() , filter() , reduce() , forEach()
// find() , findIndex() , some() , every()

// push() , unshift(), pop() , shift() , includes(), indexOf(), at(), reverse()
//contact() , join()


// slice 
//             0          1        2        3        4        5
let citi = ["nagpur","banglore","delhi","kolkata","chennai","ujjain"]
//             -6       -5     -4         -3           -2         -1
//citi.slice(startIndex,endIndex(not inclusive))
console.log(citi.slice(2))
console.log(citi.slice(2,5))
console.log(citi.slice(-5,-1))
console.log(citi.slice(1,-1))
console.log(citi.slice(-6,5))
console.log(citi.slice(-1,-3))
console.log(citi.slice(-6,-5))



//splice



//flat()


//fill()


// sort()



//              0         1          2             3        4      5
let country = ["India","Pakistan","Bangladesh","Srilanka","China","Cuba"]
//             -6        -5        -4             -3      -2       -1
//county.slice(startIndex,EndIndex(not inclusive))

let q11 = country.slice(2)
console.log(q11)
console.log(country.slice(1,5))
console.log(country.slice(-6,-2))
console.log(country.slice(-6,5))
console.log(country.slice(1,-1))
console.log(country.slice(-1,-4))
console.log(country.slice(-3))

//                0       1       2         3       4
let fruitss = ["apple","mango","chikoo","payapa","grapes"]
// fruitss.pop()
// fruitss.shift()
// console.log(fruitss)
// splice(startIndex,numberOfElementsToBeDeleted)

// fruitss.splice(1,2)
// console.log(fruitss)

// fruitss.splice(2,1)
// console.log(fruitss)

// fruitss.splice(2,2,"a","b")
// console.log(fruitss)


// let vege = ["cabbage","cauliflower","tomato","brinjal"]
// vege.sort()
// console.log(vege)


// flat()
//                0           1           2
//              0  1   2   0  1  2    0   1  2
let numbers = [[11,22,33],[44,55,66],[77,88,99]]
console.log(numbers[1][0])
console.log(numbers[2][2])
let qq = numbers.flat()
console.log(qq)

// fill()

let markss = [11,22,33,44,55,66,77,88,99]
let q22 = markss.fill('a',1,5)
console.log(q22)









