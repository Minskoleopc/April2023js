
let headOne = document.querySelector('h1')
console.log(headOne)

let buttonColor = document.querySelector('button')
console.log(buttonColor)

buttonColor.addEventListener('click',function(){
    headOne.style.color = "red"
    headOne.textContent = "headTwo"
})