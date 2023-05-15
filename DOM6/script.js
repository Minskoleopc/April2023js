//<h1 id = "one" class = "two" name = "nm">Heading </h1>

let headOne = document.querySelector('h1')
console.log(headOne)


// console.log(headOne.textContent)
// headOne.textContent = "amol"


// program 1 

headOne.addEventListener('click',function(){
    headOne.textContent ="amol"
})








// let info = {
//     firstName:"chinmay",
//     lastName:"deshpande"
// }
// console.log(info.firstName)
// console.log(info['firstName'])

// info.firstName = "tanmay"
// console.log(info.firstName)
// console.log(info['firstName'])


// let family = {
//     fullName:"chinmay",
//     parent:{
//         mother:"kanchan deshpande",
//         father:"shirish deshpadne"
//     }
// }
// family.parent.mother = "kanchan s deshpande"
