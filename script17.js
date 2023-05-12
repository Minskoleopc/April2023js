let info = ["chinmay","deshpande",34,67]

let info2 = {
    // key:value
    //property:"value"
    firstName:"chinmay",
    lastName:"deshpande",
    age:34,
    rollNo:45
}

let names = ["chinmay","ram","sham","sarish"]

// retrive
console.log(names[1])
//update 
names[1] = "sham"
//add 
names.push("sarika")
names.unshift("poorva")
// delete
names.pop()
names.shift()
names.splice(2,1)

let student = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:33,
    rollNo:45,
    age:55
}
console.log(student)
// object deos not stores the value by index
//console.log(student[0])

// object cannot have duplicate keys

// retrive (.notaion and bracket)

console.log(student.firstName)
console.log(student['firstName'])

//update (.notation and bracket notation)

student.firstName = "tanmay"
student['firstName'] = "danish"

//add (.notation and bracket notation)
student.city  = "pune"
student['lang'] = "hindi"

// delete (.notation and bracket notation)
delete student.firstName
delete student['age']

// loops through array

//              0        1        2       3
let fruits = ["apple","mango","banana","orange"]
for(let i = 0 ; i < fruits.length ; i++){
    //console.log(i)
    console.log(fruits[i])
}


let vehicle = {
    // property :value
    // key:value
    color:"red",
    type:"sedane"
}
//console.log(vehicle['color'])
// bracket notation
for(let key  in vehicle){
    console.log(key,vehicle[key])
}



let students = {
    firstName:"sarika",
    lastName:"pansare",
    age:34,
    skills:["python","java",'javascript']
}

for(let key in students){
    console.log(key,students[key])
}

for(let prop of Object.keys(students)){
    console.log(prop)
}

for(let val of Object.values(students)){
    console.log(val)
}

for(let arr of Object.entries(students)){
    console.log(arr)
}

// string 