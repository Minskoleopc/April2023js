
let numbers = [11,22,33,44]

//console.log(numbers[0])
let a = numbers[0]
let b = numbers[1]
let c = numbers[2]
let d = numbers[3]

console.log(a)
console.log(b)
console.log(c)
console.log(d)


// program 1
let numbersB = [11,22,33]
let [x,y,z] = numbersB
console.log(x)
console.log(y)
console.log(z)

// program 2

let names = ["chinmay","poorva","mayuri"]
let [a1,,a2] = names
console.log(a1)
console.log(a2)

// program 3
//               0           2         3
let marks = [[11,22,33],[44,55,66],[77,88,99]]
let [[x11,x22,x33],[x44,x55,x66],[x77,x88,x99]] = marks
console.log(x55)
console.log(x88)


// program 4
let cities = [["nagpur","wardha"],["bhopal","indore"],["udaipur","jaipur"]]
let [[c1,c2],[c3,c4],[c5,c6]] = cities
console.log(c2)
console.log(c5)

// program 5

let info = {
    firstName:"chinmay",
    lastName:"deshpande"
}

let {firstName,lastName} = info
console.log(firstName)
console.log(lastName)

// program 6
let vehicle = {
    color:"red",
    type:"sedane"
}

let c21 = vehicle.color
let c22 = vehicle['type']
console.log(c21)
console.log(c22)

let {color:c33, type:c44} = vehicle
console.log(c33)
console.log(c44)


let info2 = {
    fullName:"chinmay deshpande",
    parent:{
        mother:"kamchan deshpande",
        father:"shirish deshpande"
    }
}

let {fullName:f1, parent:{mother:f2,father:f3}} = info2
console.log(f1)
console.log(f2)
console.log(f3)

// program 7 


let students = [
    {
        firstName:"rohit",
        lastName:"dani"
    },

    {
        firstName:"rasika",
        lastName:"kulkarni"
    }
]
let [{firstName:fn1,lastName:ln1},{firstName:fn2,lastName:ln2}] = students
console.log(ln1)
console.log(fn2)

let chinmay = {
    fullName:"chinmay deshpande",
    city:"pune",
    skills:["python","javascript"]
}

let {fullName:f22,city:c55,skills:[sk1,sk2]} = chinmay
console.log(c55)
console.log(sk2)