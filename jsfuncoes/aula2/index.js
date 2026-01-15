function f(){
    let soma = 0;
    for(let i = 0;i < arguments.length;i++){
        soma += arguments[i];
    }
    console.log(soma);
}
f(1,2,3,4,5,6);


function soma(a,b){
    a = a || 0;
    b = b || 0;
    console.log(a + b);
}
soma(undefined);

function conta(operador, acumulador, ...numeros){
    for(let i = 0;i < numeros.length;i++){
        if(operador === '+') acumulador += numeros[i];
        if(operador === '-') acumulador -= numeros[i];
        if(operador === '/') acumulador /= numeros[i];
        if(operador === '*') acumulador *= numeros[i];
    }
    console.log(operador, acumulador, numeros);
}
conta('+', 0, 10,20,30,40)