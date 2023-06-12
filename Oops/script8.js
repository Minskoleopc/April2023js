class Calculator {
    // addition(x,y){
    //     console.log(x+y)
    // }
    // addition(x,y,z){
    //     console.log(x+y+z)
    // }
    // addition(x,y,z,a){
    //     console.log(x+y+z+a)
    // }

    // same class, same method name , different signature
    addition(x,y,z,a){
        if(x != undefined && y != undefined && z != undefined && a != undefined){
            console.log(x+y+z+a)
        }
        else if(x != undefined && y != undefined && z != undefined){
            console.log(x+y+z)
        }
        else if(x != undefined && y != undefined ){
            console.log(x+y)
        }
        
    }

}
let cal = new Calculator()
cal.addition(12,4)
cal.addition(12,4,3)
cal.addition(12,4,3,4)

// overriding 

class WorldBank {
    loan(){
        console.log('I am loan from WB')
    }
    save(){
        console.log('I am save from WB')
    }
}
// overiding
// same method name , same signature , different class ====> inheritance
class SBI extends WorldBank {

    loan(){
        console.log('I am loan from SBI')
        super.loan()
    }
    save(){
        console.log('I am save from SBI')
        super.loan()
    }

}
let nagpur = new SBI()
nagpur.loan()
nagpur.save()