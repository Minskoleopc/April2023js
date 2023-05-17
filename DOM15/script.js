let ulList = document.querySelector('ul')
let inputText = document.querySelector('input')
let buttonE = document.querySelector('button')

buttonE.addEventListener('click',function(){
    let txt = inputText.value // grapes
    let newLi = document.createElement('li') // <li></li>
    newLi.textContent = txt // <li>grapes</li>
    ulList.appendChild(newLi)
    inputText.value = ""

})