// Promise combinators

//Promise.all()
//Promise.race()
//Promise.settled()
//Promise.any()


function getInfo(id) {
        return fetch(`https://reqres.in/api/users/${id}`)
        .then(function (response) {
            return response.json()
        })
        .then(function (response) {
            return response.data
        })

}

function errorF(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            reject("error")
        },10)
    })
}





// async function getInfo2(id1,id2,id3){
//    let pro = await Promise.all([
//     getInfo(id1),
//     getInfo(id2),
//     getInfo(id3),
//    ])
//    console.log(pro)
// }
// try {
//     getInfo2(1,4,6)
// }
// catch{
//     console.log('Error')
// }



// I will check


// async function getInfo2(id1, id2, id3) {
//     let pro = await Promise.allSettled([
//         getInfo(id1),
//         getInfo(id2),
//         getInfo(id3),
//         getInfo(99999999)
//     ])
//     console.log(pro)
// }

// getInfo2(2,3,5)

// async function getInfo2(id1) {
//     let pro = await Promise.race([
//         getInfo(id1),
//         errorF() 
//     ])
//     console.log(pro)
// }
// try catch
// getInfo2(2)


// promise.any()

async function getInfo3(id1) {
    let pro = await Promise.any([
        errorF() ,
        errorF() ,
        getInfo(id1)
    ])
    console.log(pro)
}
getInfo3(2)
