let bdy = document.querySelector('body')
bdy.addEventListener('click',function(e){
    // console.log(e.target) // element
    // console.log(e.target.tagName)// tagName
    console.log(e.target.className)
 })