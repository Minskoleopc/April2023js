// let mapA = new Map()
// console.log(mapA)


// let mapB = new Map([
//     [1, 'admin'],
//     [2, 'customer'],
//     [3, 'manager'],
//     [4, 'support']
// ])
// console.log(mapB)

// // size 
// // console.log(mapB.size)
// // mapB.set(5,"supervisor")

// // // get()
// // let q1 = mapB.get(1)
// // console.log(q1)

// // // has()
// // let q2 = mapB.has(3)
// // console.log(q2)

// // // delete()
// // mapB.delete(4)
// // console.log(mapB)

// // // clear()
// // mapB.clear()
// // console.log(mapB)


// mapB.forEach(function(v,k){
//     console.log(v)
//     console.log(k)
// })

// for(let  keys of mapB.keys()){
//     console.log(keys)
// }

// for(let  vals of mapB.values()){
//     console.log(vals)
// }

// for(let  [k,v] of mapB.entries()){
//     console.log(k,v)
// }


// Set 

let setA  = new Set()

// set and array 

let names = ["chinmay","sarika","chinmay","poorva","chinmay"]
console.log(names)

let setB  = new Set(names)
console.log(setB)

let setC = new Set()
console.log(setC)


// size 
console.log(setC.size)

// add element to set 
setC.add(11)
setC.add(22)
setC.add(33)
setC.add(44)
setC.add(55)
setC.add(55)
console.log(setC)

// has 
let q1 = setC.has(444)
console.log(q1)

// delete
let q2 = setC.delete(444)
console.log(q2)
console.log(setC)

// clear()

// let q3 = setC.clear()
// console.log(q3)
// console.log(setC)


setC.forEach(function(v1){
    console.log(v1)
})

// setC.keys()
// setC.values()
// setC.entries()

let a = [44,55,66,-77,77,88,-99]



