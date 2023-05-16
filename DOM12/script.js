

let  ulList = document.querySelector('ul')
let inputText  = document.querySelector('input')
let buttonT = document.querySelector('button')



buttonT.addEventListener('click',function(){

    let text = inputText.value  // grapes
    let liElement = document.createElement('li')// <li></li>
    liElement.textContent = text
    ulList.appendChild(liElement)
    inputText.value  = ""
})