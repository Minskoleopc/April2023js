// let amol = {
//     firstName:"amol",
//     lastName:"rao",
//     displayName:function(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// // console.log(amol.firstName)
// // console.log(amol.lastName)
// // amol.displayName()
// // program 2

// let chinmay = {
//     firstName:"chinmay",
//     lastName:"deshpande"
    
// }

// let displayC = amol.displayName

// // function expression
// // let displayC = function(){
// //     console.log(this.firstName + this.lastName)
// // }

// displayC = displayC.bind(chinmay)

// // function expression
// // let displayC = function(){
// //     console.log(chinmay.firstName + chinmay.lastName)
// // }
// displayC()





// program 2

let john = {
    firstName:"john",
    lastName:"snow"
}

let smith = {
    firstName:"smith",
    lastName:"steven"
}

let ram = {
    firstName:"ram",
    lastName:"dani"
}


// program 1

// bind method ---- return function with 'this' value set
let displayName = function(){
    console.log(this.firstName + this.lastName)
} 
displayName()

let q1 = displayName.bind(smith)
q1()
let q2 = displayName.bind(ram)
q2()

program2

let displayName2 = function(){
    console.log(this.firstName + this.lastName)
} 

let vijeet = {
    firstName:"vijeet",
    lastName:"dani"
}

let satish = {
    firstName:"satish",
    lastName:"rai"
} 

displayName2.call(vijeet)
displayName2.call(satish)


// program 3

let vijeet1 = {
    firstName:"vijeet",
    lastName:"dani"
}

let satish1 = {
    firstName:"satish",
    lastName:"rai"
} 

let greetC = function (greet){
    console.log(greet +" "+ this.firstName + this.lastName)
}
greetC.call(vijeet1,"good morning")
greetC.call(satish1,"good evening")

// apply
greetC.apply(vijeet,["good morning"])

// bind() , call() , apply()