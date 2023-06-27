//async code ---- sychronously


function getInfo() {

    setTimeout(function () {
        console.log("user created")
    }, 3000)

    setTimeout(function () {
        console.log("get  id")
    }, 2000)

    setTimeout(function () {
        console.log("get info")
    }, 1000)

}
//getInfo()

// program 2
function getInfo() {
    setTimeout(function () {
        console.log("user created")
        setTimeout(function () {
            console.log("get  id")
            setTimeout(function () {
                console.log("get info")
            }, 1000)
        }, 2000)
    }, 3000)
}
getInfo()


// promises


function createUsers(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('user created')
        },3000)
    })
}

function getId(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('getId')
        },2000)

    })
}

function getInfo(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('get Info')
        },1000)
    })
}

// createUsers()
// .then(function(data){
//     console.log(data)
//     return getId()
// })
// .then(function(data){
//     console.log(data)
//     return getInfo()
// })
// .then(function(data){
//     console.log(data)
// })
// .catch(function(){
//     console.log("error")
// })
// .finally(function(){
//     console.log('I will run last')
// })



async function getUserInfos(){
    let a = await createUsers()
    console.log(a)
    let b = await getId()
    console.log(b)
    let c = await getInfo()
    console.log(c)
}

try {
    getUserInfos()
}
catch{
    console.log("error")
}












