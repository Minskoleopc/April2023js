
let marks = [11, 22, 33]

// let a = marks[0]
// let b = marks[1]
// let c = marks[2]

// console.log(a)
// console.log(b)
// console.log(c)

let [n1,n2,n3] = marks
console.log(n1)
console.log(n2)
console.log(n3)

let names = ["chinmnay","poorva","sarika"]
let [m1,,m2] = names
console.log(m1)
console.log(m2)

let numbers = [[11,22,33],[44,55,66],[77,88,99]]
let [[m11,m22,m33],[m44,m55,m66],[m77,m88,m99]] = numbers
console.log(m66)
console.log(m33)


let info = {
    firstName:"chinmay",
    lastName :"deshpande"
}

// let q1 = info.firstName
// let q2 = info.lastName
// console.log(q1)
// console.log(q2)

let {firstName,lastName} = info
console.log(firstName)
console.log(lastName)

let vehicle = {
    type:"sedane",
    color:"blue"
}

let {type:t1,color:c1} = vehicle
console.log(t1)
console.log(c1)


let info2 = {
    fullName:"chinmay deshpande",
    parent:{
        mother:"kanchan deshpande",
        father:"shirish deshpande"
    }
}

let {fullName:fn,parent:{mother:mn,father:ffn}} = info2

console.log(ffn)
console.log(fn)


let students = [

    {
        firstName:"poorva",
        lastName:"vyas"
    },
    {
        firstName:"ram",
        lastName:"dani"
    }
]

let [{firstName:ff1,lastName:ll1},{firstName:ff2,lastName:ll2}] = students

console.log(ff1)
console.log(ff2)


let chinmay = {

    fullName:"chinmay deshpande",
    age:33,
    skills:["python","javascript"]
}
let {fullName:k1,age:k2,skills:[k3,k4]} = chinmay
console.log(k3)
console.log(k4)