
let firstName = "chinmay"
let lastName = 'deshpande'
let middleName = `shirish`

console.log(firstName)
console.log(lastName)
console.log(middleName)

console.log(typeof firstName)
// rules 
// number  + number   ----> number
// string  + number   ----> string 
// number  + string   ----> string 
// string  + string   ----> string

let x = 10
let y = 5
let word = '20'

console.log(x+y)
console.log(word+x)
console.log(x+word)
console.log(word+word)


// concatination 

let firstNamee =  `chinmay`;
let lastNamee = `deshpande`

// My firstName is chinmay and lastName is deshpande

console.log('My firstName is '+firstNamee+' and lastName is '+lastNamee)
console.log(`My firstName is ${firstNamee} and lastName is ${lastNamee}`)
console.log(`Addition of 10 + 5: ${10+5}`)

// retrive the value from string 


let city = 'pune'

// 0    1   2   3
// p    u   n   e
// string stores the value bu index
console.log(city[0]) // p
console.log(city[1]) // u
console.log(city[city.length-1])
// length-1 is always the last index


let city2 = "nagpur"

//  0   1   2   3   4    5
//  n   a   g   p   u    r

for(let i = 0 ; i < city2.length ; i++){
    //console.log(i)
    console.log(city2[i])
}

for(let i = city2.length-1 ; i >=0 ; i-- ){
    //console.log(i)
    console.log(city2[i])
}


// String   object 
// Object properties and method
// method action and return type 

let n = "ram"
let q1 = n.length
console.log(q1)


// methods 5

//   0  1  2  3   4   5
//   W  a  r  d   h   a
let city4 = "Wardha"

let t1 = city4.toUpperCase()
console.log(t1)

let t2 = city4.toLowerCase()
console.log(t2)

let t3 = city4.includes('W')
console.log(t3)

let t4 = city4.charAt(2)
console.log(t4)

let t5 = city4.indexOf('w')
let t6 = city4.indexOf('W')
console.log(t5)
console.log(t6)







