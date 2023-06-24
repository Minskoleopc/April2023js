// program 1
// function additionA(){
//     console.log("A")
// }

// function additionB(){
//     console.log("B")
// }

// additionB()
// additionA()

// Program 2
// function additionC(){
//     setTimeout(function(){
//         console.log('C is executed late')
//     },3000)
// }
// function addtionD(){
//    console.log('D is executed')
// }

// additionC()
// addtionD()

// Program 3

//user create 

//retrive user id

//get info using id

// Program 3
function getUserInfo() {

    setTimeout(function () {
        console.log('user created')
    }, 3000)

    setTimeout(function () {
        console.log('get id')
    }, 2000)

    setTimeout(function () {
        console.log('get user info')
    }, 1000)

}
//getUserInfo()


// Async code ------ execute sync


// program 4

// call back hell
function getUserInfo() {
    setTimeout(function () {
        console.log('user created')
        setTimeout(function () {
            console.log('get id')
            setTimeout(function () {
                console.log('get user info')
            }, 1000)
        }, 2000)

    }, 3000)

}
getUserInfo()


// Async code ------ sync  ---- promises
// program 4


let pro = new Promise(function(resolve,reject){

    let a = 10
    let b = 10

    if(a == b){
        resolve("hello")
    }
    else {
        reject("bye")
    }

})

// consuming the promise
pro.then(function(a){
    console.log(a)
},function(b){
    console.log(b)
})























