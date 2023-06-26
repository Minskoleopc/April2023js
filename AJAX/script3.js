// sync vs async 

// function additionA(){
//     console.log("A")
// }
// function additionB(){
//     console.log("B")
// }
// additionB()
// additionA()

// program 2

// function additionC(){
//     setTimeout(function(){
//         console.log("C")
//     },3000)
// }

// function additionD(){
//    console.log('D')
// }
// additionC()
// additionD()

// program 3 

// usercreate -- getId --- getinfo
// function getUserInfo(){
//     setTimeout(function(){
//         console.log('user created')
//     },3000)

//     setTimeout(function(){
//         console.log('getId')
//     },2000)

//     setTimeout(function(){
//         console.log('get Info')
//     },1000)
// }
// getUserInfo()


// program 4
// function getUserInfo2(){
//     setTimeout(function(){
//         console.log('user created')
//         setTimeout(function(){
//             console.log('getId')
//             setTimeout(function(){
//                 console.log('get Info')
//             },1000)
//         },2000)
//     },3000)
// }
// getUserInfo2()

// program 5

// let pro = new Promise(function(resolve,reject){
//     let a = 10
//     let b = 1
//     if(a == b){
//         resolve('hello')
//     }
//     else {
//         reject('bye')
//     }

// })

// program 6

// pro.then(function(a){
//     console.log(a)
// },function(b){
//     console.log(b)
// })

// program 7
// pro
// .then(function(a){
//     console.log(a)
// })
// .catch(function(b){
//     console.log(b)
// })


// program 8
// pro
// .then(function(a){
//     console.log(a)
// })
// .catch(function(b){
//     console.log(b)
// })
// .finally(function(){
//     console.log('I will any way')
// })

// program 9

// .then(function(a){
//     console.log(a)
//     return "Hi"
// })
// .then(function(a1){
//     console.log(a1)
// })
// .catch(function(b){
//     console.log(b)
// })
// .finally(function(){
//     console.log('I will any way')
// })

// program 10
//solving the problem of call back hell
// user create 
function createUser(){
    let pro = new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('user created')
        },3000)
    })
    return pro
}
// get id
function getId(){
    let pro2 = new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('id retrive successfully')
        },2000)
    })
    return pro2
}
//get info
function getInfo(){
    let pro3 = new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('get info')
        },1000)
    })
    return pro3
}
// createUser().
// then(function(a){
//     console.log(a)
//     return getId()
// })
// .then(function(b){
//     console.log(b)
//     return getInfo()
// })
// .then(function(c){
//     console.log(c)
// })
// .catch(function(d){
//     console.log(d)
// })
// .finally(function(){
//     console.log("code run successfully")
// })


// async await
// async ------ calls  --- synchronously 

async function getInfoB(){
    let a = await createUser()
    console.log(a)
    let b = await getId()
    console.log(b)
    let c = await getInfo()
    console.log(c)
}

//getInfoB()


// try catch to manage reject state 
try {
    getInfoB()
}
catch(e){
    console.log(e)
}

















