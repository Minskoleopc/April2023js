

// for(intialization; conditionCheck ; increment/Decrement){
//     // statements 
// }



// print 'hello'  3 type 

// intialization 
//while(condition){
//statements
// increment / decrement
//}

let a = 1
while (a <= 3) {
    console.log("hello") //"hello" "hello" "hello"
    a++ // 2 // 3 // 4
}

// print 1 to 5
let b = 1
while (b <= 5) {
    console.log(b) //1 // 2 // 3 // 4 // 5
    b++ // 2 // 3 // 4 // 5 // 6
}


// print  5 to 1
let c = 5
while (c >= 1) {
    console.log(c)
    c--
}

// table of 2

let d = 2
while (d <= 20) {
    console.log(d)
    d = d + 2
}

// table of 5 in reverse
let e = 50
while (e >= 5) {
    console.log(e)
    e = e - 5
}

// break statement with while 

let f = 1
while (f <= 5) {
    if (f == 3) {
        break
    }
    console.log(f) // 1 // 2
    f = f + 1 // 2 // 3
}


let f1 = 1
while (f1 <= 5) {
    console.log(f1)  //1 // 2 // 3
    if (f1 == 3) {
        break
    }
    f1 = f1 + 1  // 2 // 3
}


let g = 5
while (g >= 1) {
    if (g == 2) {
        break
    }
    console.log(g) // 5 // 4 // 3
    g-- // 4 // 3 // 2
}

// continue with while 


let k = 1
while (k <= 5) {
    if (k == 3) {
        k++ // 4
        continue
    }
    console.log(k) //1 // 2 // 4 // 5
    k = k + 1 // 2 // 3 // 5 // 6
}










