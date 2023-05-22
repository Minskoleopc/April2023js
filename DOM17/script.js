
let ulList = document.querySelector('ul')
let inputText = document.querySelector('input')
let addButton = document.querySelector('#add')


addButton.addEventListener('click',function(){
    let text = inputText.value
    let liList = document.createElement('li') // <li></li>
    liList.textContent = text // <li>Papaya</li>
    // adding button
    createButtons(liList)
    ulList.appendChild(liList)
    inputText.value = ""

})


function createButtons(li){

   let remove =  document.createElement('button') // <button></button>
   remove.textContent = "Remove" // <button>Remove</button>
   remove.classList.add('remove') // <button class = "remove">Remove<button>
   li.appendChild(remove)

   
   let up =  document.createElement('button') // <button></button>
   up.textContent = "Up" // <button>Up</button>
   up.classList.add('up') // <button class = "remove">Remove<button>
   li.appendChild(up)
   
   let down =  document.createElement('button') // <button></button>
   down.textContent = "down" // <button>Remove</button>
   down.classList.add('Down') // <button class = "remove">Remove<button>
   li.appendChild(down)


}


ulList.addEventListener('click',function(e){
    // console.log(e.target)
    // console.log(e.target.tagName)
    // console.log(e.target.className)

    if(e.target.tagName === "BUTTON"){

        if(e.target.className === "remove"){
            let li = e.target.parentElement
            let ul = li.parentElement
            ul.removeChild(li)
        }

        else if(e.target.className = "up"){
            let li = e.target.parentElement
            let ul = li.parentElement
            let prev = li.previousElementSibling
            if(prev){
                ul.insertBefore(li,prev)
            }
        }

        else if(e.target.className = "down"){
            let li = e.target.parentElement
            let ul = li.parentElement
            let next = li.nextElementSibling
            if(next){
                ul.insertBefore(next,li)
            }
        }



    }



})



