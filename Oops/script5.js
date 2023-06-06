// class Person {

//     firstName = undefined
//     lastName = undefined
//     rollNo = undefined
//     age = undefined

//     display(){
//         console.log(this.firstName + this.lastName)
//     }
// }

let Person = class  {

    firstName = undefined
    lastName = undefined
    rollNo = undefined
    age = undefined

    display(){
        console.log(this.firstName + this.lastName)
    }
}

let amol = new Person()
console.log(amol)
amol.firstName = "amol"
amol.lastName = "rao"
amol.age = 33
amol.rollNo = 25
console.log(amol)
amol.display()
amol.city = "pune"
console.log(amol)


// program 2 

// Sett the value at the time of object creation

class PersonB{
    constructor(fn,ln,age,rollNo){
        this.firstName  = fn
        this.lastName   = ln
        this.rollNo = rollNo
        this.age = age
    }

    display(){
        console.log(this.firstName + this.lastName)
    }
}

let amol2 = new PersonB("amol2","rao2",23,45)
console.log(amol2)
amol2.display()
let students  = [
    new PersonB("chinmay1","deshpande1",4,66),
    new PersonB("chinmay2","deshpande2",5,6),
    new PersonB("chinmay3","deshpande3",4,67),
    new PersonB("chinmay4","deshpande5",44,64),
    new PersonB("chinmay5","deshpande5",22,65),
]
students.forEach(function(el,index,arr){
    el.display()
})

// program 3 using set method

class PersonC {

     setfirstName(fn){
        this.firstName = fn
     }
     setlastName(ln){
        this.lastName = ln
     }
     setAge(age){
        this.age = age
     }
     setRollNo(rn){
        this.rollNo = rn
     }

     display(){
        console.log(this.firstName + this.lastName)
     }
}
let amol3 = new PersonC()
console.log(amol3)

amol3.setAge(13)
amol3.setfirstName('chinmay')
amol3.setlastName('deshpande')
amol3.setRollNo(34)

console.log(amol3)
amol3.display()

// program 4

// let info = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     age:45,
//     rollNo:56
// }

// info.firstName = "chinmay3"
// info.city = "pube"

class PersonD {
    set firstN(fn){
        this.firstName = fn
    }
    set lastN(ln){
        this.lastName = ln
    }
    set ag(age){
        this.age = age
    }
    set rolln(rn){
        this.rollNo = rn
    }


    get firstN(){
        return this.firstName
    }
    get lastN(){
        return this.lastName
    }
    get ag(){
        return this.age
    }
    get rolln(){
        return this.rollNo
    }

}

let amol4 = new PersonD()
amol4.firstN = "amol"
amol4.lastN = "rao"
amol4.ag = 34
amol4.rolln = 45
console.log(amol4)
console.log(amol4.firstN)
console.log(amol4.lastN)
console.log(amol4.rolln)
console.log(amol4.ag)
amol4.firstN = "amolram"
console.log(amol4)


















