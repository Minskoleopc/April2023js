// for(intilaization ; conditionCheck ; increment){
//     // staments
// }

// for with break 
// for with continue statement


// intialization 
// while(condition){
// statements
//}

// program 1

let i = 1
while (i <= 5) {
    console.log(i)  // 1 // 2 // 3 // 4 // 5
    i++  // 2 // 3 // 4 // 5 // 6
}

// program 2
let i2 = 1
while (i2 <= 3) {
    console.log("hello") // "hello" "hello" "hello"
    i2++  // 2 // 3 // 4
}

// print 5 to 1

let i3 = 5
while (i3 >= 1) {
    console.log(i3) // 5 // 4 // 3 // 2 // 1
    i3 = i3 - 1 // 4 // 3 // 2 //1 // 0
    //i--
}

// print table  of 2 using while loop
let i4 = 2
while (i4 <= 20) {
    console.log(i4) // 2 ---------------------20
    i4 = i4 + 2 // 4 ---------- 22
}

// table of 5 in reverse
let i5 = 50
while (i5 >= 5) {
    console.log(i5) // 50 ------------------5
    i5 = i5 - 5  //  45,40 ------- 0
}

// break with while
let i6 = 1
while (i6 <= 5) {
    if (i6 == 3) {
        break
    }

    console.log(i6)  // 1 // 2
    i6++  // 2 // 3
}


let i7 = 1
while (i7 <= 5) {
    console.log(i7) // 1 // 2 // 3
    if (i7 == 3) {
        break
    }
    i7++ // 2 // 3
}


let i8 = 10
while(i8 >= 1){
    if(i8 == 5){
        break
    }
    console.log(i8)
    i8 --
}

// continue with while
let i9 = 1
while(i9 <= 5){
    if(i9 == 3){
        i9 ++ //4
        continue
    }
    console.log(i9) // 1 // 2 // 4 // 5
    i9 ++ // 2 // 3 // 5 //6
}












