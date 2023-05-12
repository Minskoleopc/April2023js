let info = ["chinmay","deshpande",7709192441]
console.log(info[0])
// Array stores the value by index

let info2 = {
    firstName:'chinmay',
    lastName:'deshpande',
    age:23
}
// bracket notation and .dot notation

let students = [
    {
        fullName:"amol rao",
        age:23,
        skills:["html","css","javascript"],
        city:"nagpur"
    },
    {
        fullName:"chinmay deshpande",
        age:27,
        skills:["html","css","javascript","python","cypress"],
        city:"pune"
    },
    {
        fullName:"sarika pansare",
        age:25,
        skills:["javascript","python","cypress","selenium"],
        city:"nashik"
    },
    {
        fullName:"poorva vyas",
        age:29,
        skills:["cypress","python","django"],
        city:"indore"
    }
]

console.log(students[3].fullName)

// print fullName of all students
students.forEach(function(el,index,arr){
    console.log(el.fullName)

})

// print name of all students belong to pune city
console.log('-----------------------------')
students.forEach(function(el,index,arr){
    if(el.city === "pune"){
        console.log(el.fullName)
    }
})

// print name and numbers of skills 
// chinmay deshpande:5
students.forEach(function(el){
    console.log(el.fullName+":"+el.skills.length)
})

let total = 0 
students.forEach(function(el){
    total = total + el.age
})
console.log(total)












