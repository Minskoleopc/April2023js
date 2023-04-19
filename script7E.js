// loops 

// for(inialization ; conditionCheck ; increment/decrement){
// statements
// }

for (let i = 1; i <= 3; i++) { // 2 // 3 // 4
    console.log(i) // 1 // 2 // 3
}

//--------------------------------------
for (let i = 1; i <= 3; i++) {
    console.log("hello")
}

// program 2

for (let i = 5; i >= 1; i--) {
    console.log(i)
}

// table of 2
for (let i = 2; i <= 20; i = i + 2) {
    console.log(i)
}

// table of 5 in reverse 

for (let i = 50; i >= 5; i = i - 5) {
    console.log(i)
}


// break statement with for 

// program 2a
for (let i = 1; i <= 5; i++) { // 2 // 3 // 4 // 5 // 6

    console.log(i) // 1 // 2 // 3 // 4 // 5

}
// program 2b
for (let i = 1; i <= 5; i++) {  // 2 // 3
    if (i == 3) {
        break
    }
    console.log(i)  // 1 // 2
}

// program 2c
for (let i = 1; i <= 5; i++) { // 2 // 3
    console.log(i) //1 // 2 // 3
    if (i == 3) {
        break
    }

}
// pragram 3d
for(let i = 5 ; i >= 0 ; i--){ // 4 // 3
    if(i == 3){
        break
    }
    console.log(i) // 5 // 4
}

//program 4
for(let i = 1 ; i <= 5 ;i++){ // 2 // 3 / 4 // 5
    if(i === 3){
        continue
    }
    console.log(i)//1 // 2 // 4 // 5
}

for(let i = 5 ; i >= 0 ; i--){ // 4 // 3 // 2 // 1 // 0 // -1
    if(i == 4){
        continue
    }
    console.log(i) // 5 // 3 // 2 // 1 // 0
}


