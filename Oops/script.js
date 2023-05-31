// object literal

let chinmay = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:28,
    rollNo:45
}
let amol  = {
    firstName:"amol",
    lastName:"rao",
    age:29,
    rollNo:47
}

// 100 object -- 400 lines
// function constructor

function Person(fn,ln,ag,rll){
    this.firstName = fn
    this.lastName = ln
    this.age = ag
    this.rollNo = rll
}

let amol2 = new Person("amol2","rao2",34,66)
let chinmay2 = new Person("chinmay2","deshpande2",22,36)
console.log(amol2)
amol2.city = "pune"
console.log(amol2)
console.log(chinmay)

// Es6 class 


class PersonB {
    constructor(fn,ln,ag,rll){
        this.firstName = fn
        this.lastName = ln
        this.ag = ag
        this.rollNo = rll
    }
}
let amolC = new PersonB('amolc','raoC',55,77)
let chinmayC = new PersonB('chinmayc','deshpandeC',55,77)
console.log(amolC)

// object literal 
// function Constructor 
// es6 class
// Object.create()


let amolD = Object.create({})
console.log(amolD)

amolD.firstName = 'amol'
amolD.lastName = 'rao'
amolD.age = 34
amolD.rollNo = 45
console.log(amolD)
















// operation with objects 
// // retrive (dot notation and brack notation)
// console.log(chinmay.firstName)
// console.log(chinmay['firstName'])
// //update 
// chinmay.firstName = "chinmay s"
// chinmay['firstName'] = "chinmay shirish"
// // delete 
// delete chinmay.firstName
// delete chinmay['lastName']
// // add
// chinmay.city = "pune"
// chinmay.language = "hindi"