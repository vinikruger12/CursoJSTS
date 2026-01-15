function fizzBuzz(a){

    if(isNaN(a)) return a;

    if(((a % 3) === 0) && ((a % 5) === 0)){
        return console.log("FizzBuzz");
    }
    else if((a % 3) === 0){
        return console.log("Fizz");
    }
    else if((a % 5) === 0){
        return console.log("Buzz");
    }
    else return console.log(a);
}

for(let i = 0;i < 100;i++){
    fizzBuzz(i);
}


