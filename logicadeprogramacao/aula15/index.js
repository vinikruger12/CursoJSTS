function soma(a,b){
    if(typeof(a) !== 'number' || typeof(b) !== 'number'){
        throw("a e b precisam ser numeros");
    }

    return a+b;
}

try{
    console.log(soma(1,2));
    console.log(soma(1,'1'));
}
catch(err){
    console.log(err);
}
finally{
    console.log("Sempre eh execvutado")
}

