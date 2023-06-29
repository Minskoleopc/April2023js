// Example
async function proAll() {
    let a = await Promise.all([
        Promise.resolve('hello'),
        Promise.resolve('hello'),
        Promise.reject('bye'),
        Promise.resolve('hello')
    ])
    return a
}
proAll()
    .then(function (e) {
        console.log(e)
    })
    .catch(function (e) {
        console.log(e)
    })


// Api example
function getUserId(id) {
    return fetch(`https://reqres.in/api/users/${id}`)
        .then(function (response) {
            console.log(response)
            return response.json()
        })
        .then(function (response) {
            // console.log(response)
            return response.data
        })

}


async function getUsers() {
    let a = await Promise.all([
        getUserId(7),
        getUserId(3),
        getUserId(2),

    ])
    return a
}

getUsers()
.then(function (e) {
    console.log(e)
})
.catch(function(){
    console.log('error ocuured')
})



// Promise allSettled()



// Promise.race()



// Promise.any()






