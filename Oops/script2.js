
// // // object literal
// // let amol = {
// //     firstName:"amol",
// //     lastName:"rao",
// //     age:30,
// //     rollNo:29,
// //     display:function(){
// //         console.log(this.firstName + this.lastName)
// //     }
// // }

// // let chinmay = {
// //     firstName:"chinmay",
// //     lastName:"deshpande",
// //     age:34,
// //     rollNo:27,
// //     display:function(){
// //         console.log(this.firstName + this.lastName)
// //     }
// // }

// // chinmay.display()
// // amol.display()

// // program 2

// function Person(fn,ln,ag,rl){
//     this.firstName  =  fn
//     this.lastName = ln 
//     this.age = ag
//     this.rollNo = rl
//     // this.display = function(){
//     //     console.log(this.firstName + this.lastName)
//     // }
// }

// let amol2 = new Person("amol2","rao2",34,55)
// let chinmay2 = new Person("chinmay2","deshpande2",33,45)

// // console.log(amol2)
// // console.log(chinmay2)

// // amol2.display()
// // chinmay2.display()


// console.log(amol2 instanceof Person)
// console.log(chinmay2 instanceof Person)


// // Everything in js is object 
// // Everyobject has object __proto__ === Parent.prototype

// console.log(amol2.__proto__ === Person.prototype)
// console.log(chinmay2.__proto__ === Person.prototype)

// Person.prototype.display = function(){
//     console.log(this.firstName + this.lastName)
// }
// Person.prototype.country = "India"
// amol2.display()
// chinmay2.display()

// console.log(amol2)
// console.log(chinmay2)

// console.log(amol2.country)
// console.log(chinmay2.country)


// console.log(amol2.hasOwnProperty("country"))
// console.log(amol2.hasOwnProperty("firstName"))

let audi = {
    color: "red",
    type: "sedane",
    displayColor: function () {
        console.log(this.color)
    }
}

let bwm = {
    color: "black",
    type: "SUV",
    displayColor: function () {
        console.log(this.color)
    }
}

// bwm.displayColor()
// audi.displayColor()


function Vehicle(cl, ty) {
    this.color = cl
    this.type = ty
    // this.displayColor = function () {
    //     console.log(this.color)
    // }
}

let audi1 = new Vehicle("red", "sedane")
let bmw1 = new Vehicle("black", "SUV")



console.log(audi1)
console.log(bmw1)

console.log(audi1.__proto__ === Vehicle.prototype)
console.log(bmw1.__proto__ === Vehicle.prototype)

Vehicle.prototype.displayColor = function(){
    console.log(this.color)
}
Vehicle.prototype.country = "India"

audi1.displayColor()
bmw1.displayColor()

console.log(audi1.country)
console.log(bmw1.country)

console.log(audi1 instanceof Vehicle)
console.log(bmw1 instanceof Vehicle)

console.log(audi1.hasOwnProperty('country'))
console.log(audi1.hasOwnProperty('color'))

// ES6 class 














// Object Create

