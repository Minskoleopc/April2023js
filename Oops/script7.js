// Es6 class
// student  --  // firstName --  lastName --- adharCardnumber(parent)
// teaccher -- // firstName --  lastName --- adharCardnumber-- salary
//(child)

// class Student {
//     firstName = "chinmay"
//     lastName = "deshpande"
//     adharNo = 123

//     display(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// class Teacher  extends Student {
//     salary = 1000


// }

// let amol = new Teacher()
// console.log(amol.firstName)
// console.log(amol.lastName)
// console.log(amol.adharNo)
// console.log(amol.salary)
// amol.display()

// program 2
// class Student {
//     constructor(fn,ln,adharNo){
//         this.firstName = fn
//         this.lastName = ln
//         this.adharNo = adharNo
//     }

//     display(){
//         console.log(this.firstName+ this.lastName)
//     }
// }
// class Teacher extends Student {
//     salary = 1000
// }

// let amolT = new Teacher("amolT","RaoT",123)
// console.log(amolT)

// console.log(amolT.firstName)
// console.log(amolT.lastName)
// console.log(amolT.salary)
// console.log(amolT.adharNo)
// amolT.display()

// program 3

class Student {
    constructor(fn, ln, adNo) {
        this.firstName = fn
        this.lastName = ln
        this.adharNo = adNo
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

class Teacher  extends Student {
    constructor(fn, ln, adNo, salary){
        super(fn, ln, adNo)
        this.salary = salary
    }

    displaySalary(){
        console.log(this.salary)
    }
}
let amolT2 = new Teacher("amolT2","raoT2",23,1000)
console.log(amolT2.firstName)
console.log(amolT2.lastName)
console.log(amolT2.adharNo)
console.log(amolT2.salary)
amolT2.displaySalary()
amolT2.displayName()





