// //          0  1  2   3
// let info = [11,22,33,44]
// console.log(info[0]) // 11


// let amol = {
//     firstName:"amol",
//     lastName:"rao",
//     age:34
// }
// console.log(amol.firstName)

let students = [
    {
        firstName:"chinmay",
        lastName:"deshpande",
        age:32,
        city:"pune",
        skills:["python","css","html","css","javascript"]
    },

    {
        firstName:"mayuri",
        lastName:"deshpande",
        age:25,
        city:"nagpur",
        skills:["javascript","selenium"]
    },

    {
        firstName:"sarika",
        lastName:"pansare",
        age:27,
        city:"sangamner",
        skills:["javascript","selenium","python3"]
    }

]

// console.log(students[2].firstName)
// console.log(students[1].firstName)
// console.log(students[0].firstName)


// print firstName of all students 
students.forEach(function(el,index,arr){
    console.log(el.firstName)
})

// print name of student of pune city
students.forEach(function(el,index,arr){
    if(el.city == "pune"){
        console.log(el.firstName)
    }
})

// program 3
//firstName:numberOfSkills
students.forEach(function(el){
    console.log(`${el.firstName}:${el.skills.length}`)
})

// program 4
// average age of all students

let avg = 0
students.forEach(function(el){
   // console.log(el.age)
   avg = avg + el.age
})
console.log(avg/students.length)

// program  5
// number of student with selenium skill
students.forEach(function(el){
    if(el.skills.includes('selenium')){
        console.log(el.firstName)
    }
})











