function additionA() {
    console.log('A  is called')
}


function additionB() {
    console.log('B is called')
}

// additionA()
// additionB()


// additionB()
// additionA()

// program 2
// function additonC(){
//     setTimeout(function(){
//         console.log('C is called')
//     },3000)
// }

// function additionD(){
//   console.log('D is called')
// }

// additonC()
// additionD()

// Program 3
// User created ----- retrive id ----- getinfo

function getInfo() {

    setTimeout(function () {
        console.log('user created')
    }, 3000)

    setTimeout(function () {
        console.log('retrive user by id')
    }, 2000)

    setTimeout(function () {
        console.log('get user by info')
    }, 1000)

}

//getInfo()


// program 4
// call back hell

function getInfo() {
    setTimeout(function () {
        console.log('user created')
        setTimeout(function () {
            console.log('retrive user by id')
            setTimeout(function () {
                console.log('get user by info')
            }, 1000)

        }, 2000)
    }, 3000)
}
//getInfo()

// program 5 promisies
// let pro  = new Promise(function(resolve,reject){
//     let a = 10
//     let b = 5

//     if(a == b){
//        resolve('both are equal')
//     }
//     else {
//         reject('both are not equal')
//     }
// })

// pro.then(function(a){
//     console.log(a)
// },function(b){
//     console.log(b)
// })


// program 6

let pro2 = new Promise(function (resolve, reject) {
    let a = 10
    let b = 10

    if (a == b) {
        resolve([11, 22, 33])
    } else {
        reject([-11, -22, -33])
    }
})

// pro2
//     .then(function (arr) {
//         console.log(arr[2])
//     })
//     .catch(function (arr2) {
//         console.log(arr2[1])
//     })

// program 7
// let pro3 = new Promise(function (resolve, reject) {
//     let a = 10
//     let b = 10.1
//     if (a == b) {
//         resolve({ firstName: "chinmay", lastName: "deshpande" })
//     }
//     else {
//         reject({ error: "unable to load data" })
//     }
// })
// pro3
//     .then(function ({ firstName, lastName }) {
//         console.log(firstName, lastName)
//     })
//     .catch(function ({ error }) {
//         console.log(error)
//     })
//     .finally(function () {
//         console.log('I will run in any case')
//     })

// program 8

let pro4 = new Promise(function (resolve, reject) {
    let a = 10
    let b = 100
    if (a == b) {
        resolve("both are equal")
    }
    else {
        reject('both are not equal')
    }

})


pro4
    .then(function(a){
        console.log(a)
        return "hello"
    })
    .then(function(b){
        console.log(b)
    })
    .catch(function(c){
        console.log(c)
    })
    .finally(function(){
        console.log('I will run any way')
    })

































