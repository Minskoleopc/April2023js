// Javascript string -- object 
// Object --- properties and method 
// method - action and return type 
// 0   1  2  3
// P   u  n  e

let cityOne = "Pune"
// toUpperCase()
let q1 = cityOne.toUpperCase()
console.log(q1)

let q2 = cityOne.toLowerCase()
console.log(q2)

let q3 = cityOne.includes('p')
let q4 = cityOne.includes('P')
let q5 = cityOne.includes('Pu')
console.log(q3)
console.log(q4)
console.log(q5)

let q6 = cityOne.indexOf('u')
let q7 = cityOne.indexOf('U')
console.log(q6)
console.log(q7)

let q8 = cityOne.charAt(2)
console.log(q8)

// -----------------------------------------------------
let city2 = "Nagpur"
// startsWith() // endsWith() , trim() , trimStart() ,trimEnd()

let q9 = city2.startsWith('N')
let q10 = city2.startsWith('Nag')
console.log(q9)
console.log(q10)

let q11 = city2.endsWith('ur')
let q12 = city2.endsWith('r')
console.log(q11)
console.log(q12)


let city3 = " wardha "

console.log(city3.length)
let q13 = city3.trimStart()
console.log(q13.length)


let city4 = " goa "
console.log(city4.length)
let q14 = city4.trimEnd()
console.log(q14)
console.log(q14.length)

let city5 = " mumbai "
console.log(city5.length)
let q15 = city5.trim()
console.log(q15.length)
console.log(city5.length)

// split() , replace()

let word = "I am learning javascript"
let q16 = word.replace('javascript','python')
console.log(q16)


let word2 = "Javascript is great"

let q17 = word2.split(' ')
let q18 = word2.split('a')
console.log(q17)
console.log(q18)

//["Javascript","is","great"]
//["J","v","script is gre","t"]

let info = "I am learning js"
let q19 = info.split(' ')
console.log(q19)

let info2 = ["I","am","learning","js"]
let q20 = info2.join(' ')
console.log(q20)


let city6 = "jaipur"
//city6.slice(startEnd, endIndex(not inclusive))
// 0     1     2     3   4    5
// J     a     i     p   u    r
//-6    -5    -4    -3  -2    -1

console.log(city6.slice(3))
console.log(city6.slice(1,3))
console.log(city6.slice(-6,-2))
console.log(city6.slice(1,-2))
console.log(city6.slice(-5,5))
console.log(city6.slice(-1,-5))








