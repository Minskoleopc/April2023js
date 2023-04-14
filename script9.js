

// Type 

// Human 
// Properties - age , color , weight , height
// Method -  walk() , talk()

// Vehicle 
// Properties - color , model , type 
// Method - Start() . Stop()

//Bank
// Properties - accNo , accName , BranchName , IfscCode
// Method - Deposit() ,  WithDrawl()

// Javascript -- Type -- object --- properties and methods

// Method
// Gym()
// Action - Excercise
// Return - Health


// program 1

let a = 10
console.log(a)
console.log(typeof a)

//             0          1       2        3        4
let names = ["chinmay", "poorva", "sarika", "mayuri", "ram"]
console.log(names[0])
console.log(names[3])

// array stores the value by index
for (let i = 0; i < 5; i++) {  //1 // 2 // 3 // 4 // 5
    //console.log(i) // 0 , 1 , 2 , 3 // 4
    console.log(names[i])
    // i  --- 0
    // i  --- 1
    // i  --- 2
    // i ---- 3
    // i --- 4
}


// program 2

//                0      1        2       3 
let fruits = ['apple', 'mango', 'banana', 'grapes']
console.log(fruits[0])

// Objects properties and methods
console.log(fruits.length)

for (let i = 0; i < 4; i++) {
    //console.log(i)
    console.log(fruits[i])
}


// program 3

let vegetables = ['potato','brinjal','cabbage',"carrot"]
let s1 = vegetables.length
console.log(s1)


// 23- methods 
// push()
// action - add the element at the last
// return - new length of array 

let t1 = vegetables.push('cauliflower')
console.log(vegetables)
console.log(t1)

//unshift()
//action - add the element at start of array
//return - new length 

let t2 = vegetables.unshift("ladyfinger")
console.log(t2)
console.log(vegetables)
























