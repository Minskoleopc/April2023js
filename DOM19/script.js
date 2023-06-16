let headOne = document.querySelector('h1')
console.log(headOne)

// element
let cls = headOne.className
console.log(cls)

headOne.className = "four"
console.log(headOne)

headOne.classList.add('five')
console.log(headOne)
headOne.classList.remove('four')
console.log(headOne)
headOne.classList.toggle('five')
console.log(headOne)
headOne.classList.toggle('five')
console.log(headOne)

// reading attriute value other than class
console.log(headOne.getAttribute('id'))


// updating attribute value other than class 
headOne.setAttribute('id','seven')
console.log(headOne)

// adding another attribut other than class
headOne.setAttribute('data-cy','cypress-1')
console.log(headOne)

// javascript 

// element create ??
// element retrive ??
// delete retrive
// udate (textContent)
// javascript 
// attibute - element 
// adding new attribute
// attribute value retrive
// delete attribute


let listC = document.querySelectorAll('.veg')
let olList = document.querySelector('ol')
console.log(listC)

olList.addEventListener('mouseover',function(){
    for(let i = 0 ; i < listC.length ; i++){
        listC[i].textContent =   listC[i].textContent.toUpperCase()
    }
})

olList.addEventListener('mouseout',function(){
    for(let i = 0 ; i < listC.length ; i++){
        listC[i].textContent =   listC[i].textContent.toLowerCase()
    }
})










