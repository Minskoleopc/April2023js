
// program 1
var firstName = "vijeet"
var lastName = "dani"

// program 1

// let info = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     display:function(){
//         // this --- info
//         console.log(this)
//         console.log(this.firstName + this.lastName)
//         function display2(){
//             console.log(this.firstName + this.lastName)
//         }
//         display2()
//     }
// }

// let info2 ={
//     firstName:"chinmay",
//     lastName:"deshpande",
//     display:function(){
//         // this ==> info
//         console.log(this.firstName + this.lastName)
//         let display2 = ()  => {
//             // this ==> infp
//             console.log(this.firstName + this.lastName)
//         }
//         display2()
//     }
// }
//info2.display()
// program 3


let info3 = {
    firstName: "chinmay",
    lastName: "deshpande",
    display:  () => {
        // this ==> window
        console.log(this.firstName + this.lastName)
        let display2 = () => {
            // this ==> window
            console.log(this.firstName + this.lastName)
        }
        display2()
    }
}
info3.display()









