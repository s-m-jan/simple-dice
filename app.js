let a;
function dice(){
    a = Math.floor((Math.random()* 10) + 1)
    console.log(a);
    if(a>=4){
        dice()
    }
}

dice()