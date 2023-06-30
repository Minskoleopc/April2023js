// program 1
// async function allM() {
//     let a = Promise.all([
//         Promise.resolve('hello'),
//         Promise.resolve('hi'),
//         Promise.resolve('gm'),
//         Promise.reject('bye')
//     ])
//     return a 

// }
// allM()
// .then(function(e){
//     console.log(e)
// })
// .catch(function(e){
//     console.log(e)
// })

// program 2

// async function allM() {
//     let a = Promise.race([
//         new Promise(function(resolve,reject){
//             setTimeout(function(){
//                 resolve('hello')
//             },3000)
//         }),
//         new Promise(function(resolve,reject){
//             setTimeout(function(){
//                 resolve('hi')
//             },2000)
//         }),
//         // new Promise(function(resolve,reject){
//         //     setTimeout(function(){
//         //         reject('bye')
//         //     },1000)
//         // })

//     ])
//     return a 
// } 
// allM()
// .then(function(e){
//     console.log(e)
// })
// .catch(function(e){
//     console.log(e)
// })




async function allS() {
    let a = Promise.allSettled([

        Promise.resolve("hello"),
        Promise.reject("bye"),
        Promise.resolve("hello2"),
        Promise.reject("bye2"),

    ])
    return a 
} 
allS()
.then(function(e){
    console.log(e)
})

// Promise.any()
async function allAny() {
    let a = Promise.any([
        Promise.reject("bye"),
        Promise.resolve("hello2"),
        Promise.reject("bye2"),

    ])
    return a 
} 
allAny()
.then(function(e){
    console.log(e)
})