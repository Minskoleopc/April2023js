//  9am
// Friday sat sun --- 7 to 8 pm

let ulList = document.querySelector('ul')
let buttonOne = document.querySelector('#one')
let input = document.querySelector('input')


buttonOne.addEventListener('click',function(){
    let txt = input.value
    let newLi = document.createElement('li') // <li></li>
    newLi.textContent = txt // <li>Papaya</li>
    CreateButton(newLi)
    ulList.appendChild(newLi)
    input.value = ""
})

function CreateButton(li){
    // <button class ="remove">Remove</button>
    // <button class ="up">Up</button>
    // <button class ="down">Down</button>
    let r = document.createElement('button') // <button></button>
    r.textContent = "Remove" // <button>Remove</button>
    r.classList.add('remove') // <button class = "remove">Remove</button>
    li.appendChild(r)

    let u = document.createElement('button')  // <button></button>
    u.textContent = 'Up' // <button>Up</button>
    u.classList.add('up')// <button class = "up"> Up</button>
    li.appendChild(u)

    let d = document.createElement('button')  // <button></button>
    d.textContent = 'Down' // <button>Down</button>
    d.classList.add('down')// <button class = "down"> Down</button>
    li.appendChild(d)

}

