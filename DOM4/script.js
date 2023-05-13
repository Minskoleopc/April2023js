


 //<h1 id = "one"  class = "two"  name = "three">Fruits</h1>

 //Basic css selector

 // tagName
 let byTagName = document.querySelector('h1')
 console.log(byTagName)
 // class 
 let byClassName =  document.querySelector('.two')
 console.log(byClassName)
 // id 
 let byId = document.querySelector('#one')
 console.log(byId)
 // any Attribue
 // tagName[attribute = "value"]
 let byName  = document.querySelector('h1[name="three"]')
 console.log(byName)

 // <p id = "three"  class = "four"  name = "five">Fresh fruits in list</p>

 // tagName 

 let byTagNameP = document.querySelector('p')
 console.log(byTagNameP)
 // className 
 let byClassNameP = document.querySelector('.four')
 console.log(byClassNameP)
 // id 
 let byIdp = document.querySelector('#three')
 //anyAttribute
 let byNameP = document.querySelector('p[name="five"]')
 console.log(byNameP)




//  byId.addEventListener('click',function(){
//     byId.textContent = "Vegetables"
//  })

// console.log('------------------------')
// console.log(byId.textContent)
// byId.textContent = "vegetable"

byId.addEventListener('click', function(){
    byId.textContent = "vegetable"
})






// let info = {
//     firstName:"chinmay",
//     lastName:"deshpande"
// }
// console.log(info.firstName)
// console.log(info['firstName'])
// info.firstName = "tanmay"