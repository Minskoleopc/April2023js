// let info = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     age:34,
//     skills:["python","javascript","c"],
//     canDrive:true,
//     1:"manager"
// }
// console.log(info)
// keys are always string  in js object
// map will have different datatype as key

// Object stores the value by prop/val or key/value format
// Map stores the value by prop/val or key/value format 
//Map and Object does stores the value bt index



let mapA = new Map()
console.log(mapA)


// add the element to Map
mapA.set(1,'admin')
mapA.set(2,'customer')
mapA.set(3,'support')
mapA.set(4,'manager')
mapA.set(true,'others')
console.log(mapA)

// to find the size of map (numbers of prop value)
let q1 = mapA.size
console.log(q1)

// to delete the prop from map
mapA.delete(2)
console.log(mapA)

// to check whether prop exist on map
let q2 = mapA.has(true)
let q3 = mapA.has(6)
console.log(q2)
console.log(q3)

console.log(mapA)
mapA.clear()
console.log(mapA)


// set()
// size
// has()
// delete()
// clear()


let mapB = new Map()
mapB.set('MH',"mumbai")
mapB.set('RJ',"jaipur")
mapB.set('MP',"bhopal")
mapB.set('UP',"lucknow")

console.log(mapB)
let q4 = mapB.get('MP')
console.log(q4)

mapB.forEach(function(val,key){
    console.log(val,key)
})


for(let k of mapB.keys()){
    console.log(k)
}

for(let v of mapB.values()){
    console.log(v)
}

for(let [k,v] of mapB.entries()){
    console.log(k,v)
}

// set()
// get()
// has()
// delete()
// clear()
// size

// forEach()
// keys() - for of
// values() - for of
// entries() - for of












