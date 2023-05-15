

let inputT = document.querySelector('input')
let buttonB = document.querySelector('button')
let headOne = document.querySelector('h1')


console.log(inputT)
console.log(buttonB)
console.log(headOne)


buttonB.addEventListener('click',function(){
    let cl = inputT.value
    headOne.style.color = cl
})







