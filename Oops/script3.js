// function Person(fn,ln,age,rollNo){ 
//     this.firstName  = fn
//     this.lastName = ln
//     this.age  = age
//     this.rollNo = rollNo
   
    
// }

// let amol = new Person("amol","rao",12,45)
// let chinmay = new Person("chinmay","deshpande",13,44)

// console.log(amol.__proto__ === Person.prototype)
// console.log(chinmay.__proto__ === Person.prototype)

// console.log(amol)
// console.log(chinmay)

// Person.prototype.displayName = function(){
//     console.log(this.firstName+ this.lastName)
// }
// Person.prototype.country = "India"

// console.log(amol instanceof Person)
// console.log(chinmay instanceof Person)

// amol.displayName()
// chinmay.displayName()

// console.log(amol.country)
// console.log(amol.country)

// console.log(amol.hasOwnProperty('firstName'))
// console.log(amol.hasOwnProperty('country'))


// ES6

// class PersonB {
//     constructor(fn,ln,age ,rollNo){
//         this.firstName  = fn
//         this.lastName = ln 
//         this.age = age
//         this.rollNo = rollNo
//         // this.display = function(){
//         //     console.log(this.firstName + this.lastName)
//         // }
//     }

//     display(){
//         console.log(this.firstName + this.lastName)
//     }


// }

// let amol2 = new PersonB("amol2","rao2",23,45)
// let chinmay2 = new PersonB("chinmay2","deshpande2",27,44)

// console.log(amol2)
// console.log(chinmay2)

// amol2.display()
// chinmay2.display()


// program 3

let obj = {
    init:function(fn,ln,age,rollNo){
        this.firstName = fn
        this.lastName = ln 
        this.rollNo = rollNo
        this.age = age
    },
    display:function(){
        console.log(this.firstName + this.lastName)
    }
}


let amol3  = Object.create(obj)

// amol3.firstName = "amol3"
// amol3.lastName = "rao3"
// amol3.age = 23
// amol3.rollNo = 45
// amol3.display = function(){
//    console.log(this.firstName +  this.lastName)
// }

console.log(amol3)
amol3.init('amol3','rao3',23,45)
console.log(amol3)
amol3.display()







