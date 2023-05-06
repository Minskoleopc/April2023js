// type

// Human 
// Property - height , weight , age , color
// Method - walk() , talk()
// Amol


// Vehicle
// Property - color type
// Method - start() stop()
// Audi

//Bank acc 
// Property - accNo accName IFSC code , branchName , balana
// Method - deposit()  withdrawl()
// Chinmay

let amol = {
    firstName:"amol",
    lastName:"rao",
    age:34
}

let chinmay = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:55
}

class Person {
    firstName = undefined
    lastName = undefined
    age = undefined

}

let amolA = new Person()
console.log(amolA)
amolA.firstName = "amol"
amolA.lastName = "rao"
amolA.age = 34


class PersonD {
    constructor(fn,ln,age){
        this.firstName = fn
        this.lastName = ln 
        this.age = age
    }
}

let hemant = new Person("hemant","kulkarni",34)
console.log(hemant)




