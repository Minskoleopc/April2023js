let info = {
    firstName:"chinamy",
    lastName:"deshpande",
    age:24,
    rollNo:23,
    skills:["python","java","html","css"],
    1:"admin"
    
}
console.log(info)

// Object can have string as property data type 
// Map can have any data type as property

//Both does not stores the value by index
//Both stores the value by key value pair


// Defining the map

let mapA = new Map()
console.log(mapA)

// Javascript object 
// Object - properties and method 
// method - action and return type

// add property and value or key and value to map

mapA.set(1,"admin")
mapA.set(2,"support")
mapA.set(3,"customser")
mapA.set(4,"manager")
mapA.set(true,"canDrive")
console.log(mapA)

// size 
console.log(mapA.size)

// get the property value from map
let q1 = mapA.get(1)
console.log(q1)

// To check whether a particular property exist or not
let q2 = mapA.has(true)
let q3 = mapA.has(6)

console.log(q2)
console.log(q3)

// to delete particular property - value
let q4 = mapA.delete(2)
console.log(q4)
console.log(mapA)

// console.log(mapA)
// mapA.clear()
// console.log(mapA)

mapA.forEach(function(vl,ky){
    console.log(vl,ky)
})


for(let key of mapA.keys()){
    console.log(key)
}

for(let val of mapA.values()){
    console.log(val)
}

for(let [k,v] of mapA.entries()){
    console.log(k,v)
}





















