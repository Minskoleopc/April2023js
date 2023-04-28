// string 
let firstName  = "chinmay"
let lastName = 'deshpande'
let middleName = `shirish`

console.log(firstName)
console.log(lastName)
console.log(middleName)


// rules 
// string + string ------ string 
// number + string ------ string 
// string + number ------ string 
// number + number ------ number 

let a = 10
let b = 5
let c = '5'

console.log(c+c)
console.log(a+b)
console.log(a+c)
console.log(c+a)


let x1 = 1
let x2 = 2
let x3 = '3'

console.log(x1 + x2 + x3)
// number + number  + string 
//      3    + '3'  ====>33
//string concatination 


let firstNamee = "chinmay"
let lastNamee = "deshpande"

console.log("My firstName is "+firstNamee+" and my lastName is "+lastNamee)
console.log(`My firstName is ${firstNamee} and my lastName is ${lastNamee}`)
console.log(`Addition is  1 and 2 is :${1+2}`)

// string loops 
// string stores the value by index

let city = "pune"

// 0    1   2    3
// p    u   n    e
// string stores the value by index

console.log(city[0])
console.log(city[1])
console.log(city[2])
console.log(city[3])

for(let i = 0 ; i < city.length ; i++){
    //console.log(i)
    console.log(city[i])
}

for(let i = city.length -1 ; i >= 0 ; i--){
    console.log(i)
}


// String ---- object ---
// method and properties 
// method - action and return 

// 0   1   2   3   4    5  
// N   a   g   p   u    r




let city2 = "Nagpur"
console.log(city2.length)


let r1 = city2.toUpperCase()
console.log(r1)

let r2 = city2.toLowerCase()
console.log(r2)

let r3 = city2.includes("N")
console.log(r3)

let r4 = city2.indexOf("N")
let r5 = city2.indexOf("n")
console.log(r4)
console.log(r5)


let r6 = city2.charAt(3)
console.log(r6)
























