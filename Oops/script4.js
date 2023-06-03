// // object literal
// // let amol = {
// //     firstName:"chinmay",
// //     lastName:"deshpande",
// //     age:23,
// //     rollNo:34,
// //     display:function(){
// //         console.log(this.firstName + this.lastName)
// //     }
// // }
// // amol.display()


// // function constructor

// function Person(fn,ln,age,rollNo){
//     this.firstName = fn
//     this.lastName = ln
//     this.age = age
//     this.rollNo = rollNo
//     // this.display = function(){
//     //     console.log(this.firstName + this.lastName)
//     // }
// }

// let amol2 = new Person("amol2","rao2",34,46)
// let chinmay2 = new Person("chinmay2","deshpande2",24,46)

// // amol2.display()
// // chinmay2.display()

// console.log(amol2)
// console.log(chinmay2)

// console.log(amol2 instanceof Person)
// console.log(chinmay2 instanceof Person)

// console.log(amol2.__proto__ === Person.prototype)
// console.log(chinmay2.__proto__ === Person.prototype)

// Person.prototype.display = function(){
//     console.log(this.firstName + this.lastName)
// }

// Person.prototype.country = "India"

// amol2.display()
// chinmay2.display()

// console.log(amol2.country)
// console.log(chinmay2.country)

// console.log(amol2.hasOwnProperty('country'))
// console.log(chinmay2.hasOwnProperty('country'))

// console.log(amol2.hasOwnProperty('firstName'))
// console.log(chinmay2.hasOwnProperty('firstName'))

// // Es6 class 

class PersonB{
    constructor(fn,ln,age,rollNo){
        this.firstName = fn
        this.lastName = ln
        this.age = age
        this.rollNo = rollNo
        // this.display = function(){
        //     console.log(this.firstName + this.lastName)
        // }

    }

    display(){
        console.log(this.firstName + this.lastName)
    }

}

let amol3 = new PersonB("amol3","rao3",34,46)
let chinmay3 = new PersonB("chinmay3","deshpande3",24,46)

console.log(amol3)
console.log(chinmay3)

amol3.display()
chinmay3.display()

// program 3

let obj = {
    init:function(fn,ln,age,rollNo){
        this.firstName = fn
        this.lastName = ln
        this.age = age 
        this.rollNo = rollNo
    },
    display:function(){
        console.log(this.firstName + this.lastName)
    }
}

let amol4 = Object.create(obj)
console.log(amol4)
amol4.init('amol4',"rao4",34,45)
console.log(amol4)
amol4.display()
