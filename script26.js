let amol = {
    firstName:"amol",
    lastName:"rao",
    age:29
}

// let chinmay = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     age:30
// }

console.log(amol)
// console.log(chinmay)

// user defined data type 

class Person {

    firstName = undefined
    lastName = undefined
    age = undefined

}

let amolB = new Person()
amolB.firstName  = "amol"
amolB.lastName = "rao"
amolB.age = 34
console.log(amolB)


class PersonB {
    constructor(fn,ln,ag){
        this.firstName = fn
        this.lastName = ln
        this.age = ag
    }

}

let amolC = new PersonB("amolC","raoC",45)
let chinmayC = new PersonB("chinmayC","deshpandeC",22)

console.log(amolC)
console.log(chinmayC)


amolC.city = "pune"
console.log(amolC)

//  5 objects 
// one memory

let Persons = [
    new PersonB("sarika","pansare",34),
    new PersonB("poorva","vyas",23),
    new PersonB("amol","dani",32),
    new PersonB("amit","bhure",42),
    new PersonB("rajat","sharma",23)

]

// console.log(Persons[0].firstName)
// console.log(Persons[3].firstName)


Persons.forEach(function(el){
    console.log(el.firstName)
    console.log(el.lastName)
    console.log(el.age)
})


