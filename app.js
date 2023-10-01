let a;
function dice(){
    a = Math.floor((Math.random()* 10) + 1)
    console.log(a);
    if(a>=4){
        dice()
    }
}

// task 2

let newArray = [0, 0 ,0 ,0, 0, 0, 0, 0, 0, 0];
function dice2(){
    a = Math.floor((Math.random()* 6) + 1)
   if(a === 6){
    newArray[0] = 1
    console.log(newArray)
   } else{
    console.log("not 6 yet")
   }
}

dice2()
