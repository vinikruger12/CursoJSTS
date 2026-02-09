const numeros = [1,2,3];

const soma = numeros.filter(valor => valor % 2 === 0).map(valor => valor * 2).reduce((ac,valor) => {
    ac += valor;
    return ac;
}, 0);

console.log(soma);