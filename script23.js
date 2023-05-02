let students = [
    {
        fullName:"chinmay deshpande",
        age:34,
        skills:["python","css","javascript","html"],
        city:"pune"
    },
    {
        fullName:"sarika pansare",
        age:31,
        skills:["python2","css3","html5"],
        city:"mumbai"

    },
    {
        fullName:"anil dani",
        age:25,
        skills:["python","css3","sql","css3"],
        city:"nagpur"

    },
    {
        fullName:"satish deshmukh",
        age:27,
        skills:["python","css3","js","css3"],
        city:"pune"

    }

]

students.forEach(function(el){
    console.log(el.skills.push("salesforce"))
})

console.log(students)

// user with city pune and skill python
students.forEach(function(el){
    if(el.city === "pune" &&  el.skills.includes('python')){
        console.log(el.fullName)
    }
})
// user starting with 'a' and 's'
students.forEach(function(el){
    if(el.fullName.startsWith('a') || el.fullName.startsWith('s')){
        console.log(el.fullName)
    }
})

// age above 30

students.forEach(function(el){
    if(el.age > 30){
        console.log(el.fullName)
    }
})

let r2 = students.filter(function(el){
    return el.age > 30
})

console.log(r2)
r2.forEach(function(el){
    console.log(el.fullName)
})

// add country = 'india' for every object

students.forEach(function(el){
    el.country = "india"
})

console.log(students)


// let info = {
//     firstName:"chinmay"
// }

// console.log(info.firstName)
// info.firstName ="namrata"
// info.city = "pune"















