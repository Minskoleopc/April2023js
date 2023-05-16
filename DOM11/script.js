let h1 = document.querySelector('h1')
let input = document.querySelector('input')
let buttonA = document.querySelector('button')

buttonA.addEventListener('click',function(){
    let cl = input.value
    h1.style.color = cl

})