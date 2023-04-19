// Truth Table 


// AND &&


// True  && True    ====> True
// False && True    ====> False
// True  && False   ====> False
// False && False   ====> False

console.log(3 === 3 && 4 !== '4')
console.log(3 !== 3 && 4 !== '4')
console.log(3 === 3 && 4 === '4')
console.log(3 !== 3 && 4 === '4')



// OR ||

// True  || True  ====> True
// False || True  ====> True
// True  || False ====> True
// False || False ====> False

console.log(3 === 3 || 4 !== '4')
console.log(3 !== 3 || 4 !== '4')
console.log(3 === 3 || 4 === '4')
console.log(3 !== 3 || 4 === '4')





// NOT 
// True  ---- False
// False ---- True

console.log(! 4 !== 4)
console.log(! 5===5)


// conditional statement s

// one input and mutiple outcome

// numT > 0 && numT <=5   -----  5  % discount 
// numT > 5 && numT <= 10 ----- 10 % discount
// numT > 10              ----- 30 % discount

// if(condition){
//     // statement
// }
// else {
//     // statement
// }

let numT = -3

// if(numT > 0 && numT <= 5){
//     console.log("5 % discount")
// }
// if(numT > 5 && numT <= 10){
//     console.log("10 % discount")
// }
// if(numT > 10){
//     console.log("30 % discount")
// }


// if(numT > 0 && numT <= 5){
//     console.log("5 % discount")
// }
// else if(numT > 5 && numT <= 10){
//     console.log("10 % discount")
// }
// else if(numT > 10){
//     console.log("30 % discount")
// }
// else {
//     console.log("Incorrect input")
// }



let marks = 50

// if(marks > 90){
//     console.log("Grade A")
// }
// if(marks > 75){
//     console.log("Grade B")
// }
// if(marks > 65){
//     console.log("Grade C")
// }

// if(marks > 90){
//     console.log("Grade A")
// }
// else if(marks > 75){
//     console.log("Grade B")
// }
// else if(marks > 65){
//     console.log("Grade C")
// }
// else {
//     console.log("please try again")
// }







