let x = 10
console.log(x)
//Array stores the value by index
//            0  1  2  3 4
let marks = [88,99,78,96,77]

// retrive the value by index
console.log(marks[0])
console.log(marks[1])
console.log(marks[2])
console.log(marks[3])
console.log(marks[4])

//             0---------------------------------------------------------------notknow
let numbers = [11,22,33,44,55,66,77,88,99,111,222,333,444,555,666,777,888,999,1111]
// numbers.length -1 is lastIndex


// looping through array
//              0         1        2       3         4
let names = ["chinmay","poorva","sarika","ramesh","satish"]
console.log(names[0])


// program

for(let i = 0 ; i < 5; i++){ //1 // 2 // 3 4 // 5
   // console.log(i) //0 , 1 , 2 , 3 , 4
    console.log(names[i])
    // i = 0
    // i = 1
    // i = 2
    // i = 3
    // i = 4
}


// program 2
//              0        1        2      3
let fruits = ["apple","mango","banana","papaya"]
for(let i = 0 ; i < fruits.length ; i++){ // 1 // 2 // 3 // 4
    //console.log(i) // 0 , 1 , 2 , 3
    console.log(fruits[i])
}

// program 3
for(let i = fruits.length-1 ; i >= 0 ;i-- ){
   // console.log(i)
    console.log(fruits[i])
}

// Human  
// Property - age , color
// Method  - eat() , walk()

// Vehicle 
// Property  - type, modeNO
// Method  - start() , stop()

// Bank  
// Property  - accNo , accName, accType
// Method  - withdrawl() , deposit()


// Gym()
// action - excercise
// return health

// Everything in js is object 
// Array is also object 
// object - properties and methods 
// method action and return type 

//                  0          1          2         3
let vegetables = ["cabbage","potato","ladyfinger","brinjal"]
// length
console.log(vegetables.length)

// push()
// action - add the element at the last
// return - new length of array

let q1 = vegetables.push('carrot')
console.log(q1)
console.log(vegetables)


// unshift()
//action - add the element at first 
// return - new lenght of array

let q2 = vegetables.unshift("cauliflower")
console.log(q2)
console.log(vegetables)


// length , push(), unshift()



// pop()









