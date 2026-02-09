const numeros = [1,2,3,4,5,6,7,8,9,11,12,14,15,16,17,18];

const soma = numeros.reduce((acumulador, valor) =>{
    acumulador += valor;
    return acumulador;
}, 0);

console.log(soma);

const pessoas = [
    {nome: "Vinicius", idade:18},
    {nome: "Carol", idade:18},
    {nome:"Felipe", idade:30},
    {nome:"Gustavo", idade:20},
];

const maisVelho = pessoas.reduce((acumulador,valor) =>{
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});