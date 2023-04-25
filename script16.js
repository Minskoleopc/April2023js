let info = ["chinmay","deshpande",12,45]

let info2 = {
    //property:value
    // key:value
    firstName:"chinmay",
    lastName:"deshpande",
    age:12,
    rollNo:45
}

console.log(info2)

//             0       1            2           3         4
let cities = ["pune","nagpur","chandrapur","banglore","kolkata"]

// retrive
console.log(cities[0])
// update 
cities[0] =  "wardha"
// add
cities.push('goa')
cities.unshift('pune')
// delete
cities.pop()
cities.shift()
cities.splice(2,1)

let student = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:23,
    rollNo:45
}
// object does not stores the value by index
//console.log(student[0])


// retrive(dot notation and bracket notation)

console.log(student.firstName)
console.log(student['firstName'])

// update(dot notation and bracket notation)
student.firstName = "tanmay"
student['firstName'] = "ninad"

// add(dot notation and bracket notation)
student.city = "pune"
student['lang'] = "hindi"
console.log(student)

// delete(dot notation and bracket notation)

delete student.firstName
delete student['age']

console.log(student)


let vehicle = {
    type:'sedane',
    color:"red"
}

// retrive
// console.log(vehicle.type)
// // update 
// vehicle.type = "SUV"
// // add 
// vehicle.city = "pune"
// // delete
// delete vehicle.color
// console.log(vehicle)

// console.log(vehicle['color'])
// vehicle['color'] = "blue"
// vehicle['city'] = "pune"
// delete vehicle['color']
// console.log(vehicle)





















