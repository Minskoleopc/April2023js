// for(intialization ; conditionCheck ; increment/decrement){
//     // statements
// }

// print hello 3 times
for(let i = 0 ; i < 3 ; i++){ //1 // 2 // 3
    //console.log(i) // 0 , 1 , 2
    console.log("hello")
}

// print 1 to  5
for(let i = 1 ; i <= 5 ; i++){
    console.log(i)
}

// print( 5 to 1 )

for(let i = 5 ; i >= 1 ; i--){
    console.log(i)
}

// table of 2 
for(let i = 2 ; i <= 20 ; i = i + 2){
    console.log(i)
}

// table of 3 in reverse 

for(let i = 30 ; i >= 3 ; i = i - 3){
    console.log(i)
}


// break statement 

for(let i = 1 ; i <= 5 ; i++){ // 2 // 3
    if(i == 3){
        break;
    }
    console.log(i) // 1 // 2
}


for(let i = 1 ; i <= 5 ; i++){ // 2 //3
    console.log(i) // 1 // 2 // 3
    if(i == 3){
        break
    }
}

for(let i = 5 ; i >= 1 ; i--){ // 4 // 3 // 2
    if(i == 2){
        break
    }
    console.log(i) // 5 // 4 // 3
}

// continue  with for
for(let i = 0 ; i <=5 ; i++){ // 1 // 2 // 3 // 4 // 5 // 6
    if(i == 3){
        continue
    }
    console.log(i) // 0  // 1 // 2 // 4 // 5
}


// while 

// intialization 

// while(conditionCheck){
//     // statements 
//     // increment / decrement
// }

// print  hello 3 tyms using while 





