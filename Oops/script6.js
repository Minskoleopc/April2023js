// class Person {
//     set firstN(fn){
//         this.firstName = fn
//     }
//     set lastN(ln){
//         this.lastName = ln
//     }

//     set rollN(rn){
//         this.rollNo = rn
//     }

//     set Sage(ag){
//         this.age = ag
//     }

//     get firstN(){
//         return this.firstName 
//     }
//     get lastN(){
//         return this.lastName 
//     }

//     get rollN(){
//         return this.rollNo
//     }

//     get Sage(){
//         return this.age 
//     }
// }

// let amol = new Person()
// amol.firstN = "amol"
// amol.lastN = "rao"
// amol.rollN = 33
// amol.Sage = 34
// console.log(amol)
// console.log(amol.Sage)


// let info = {
//     firstName:"chinmay",
//     lastName:"deshpande"
// }

// info.firstName = "chinmay"

class Bank {

    constructor(fn,ln,bal){
        this.firstName = fn
        this.lastName = ln 
        this.bal = bal
        this.transaction = []
    }
    deposit(amt){
        if(amt > 0){
            this.bal = this.bal + amt
            this.transaction.push(amt)
        }
        return this.bal
    }
    withdrawl(amt){
        if(amt < this.bal){
            this.bal = this.bal - amt
            this.transaction.push(-amt)
        }
        else {
            console.log('Insufficient bal')
        }
        return this.bal
    }

    lastFiveTransaction(){
        return this.transaction.slice(-5)
    }
}

let chinmay = new Bank("chinmay","deshpande",100)
chinmay.deposit(1200)
let bal = chinmay.withdrawl(1400)
console.log(bal)
