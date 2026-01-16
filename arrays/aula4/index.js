const numeros = [1,2,3,4,5,6,7,8,9,11,12,14,15,16,17,18];
const numerosFiltrados = numeros.filter(valor => valor > 10);
const menores = numeros.filter(i => i < 10);



console.log(numerosFiltrados);
console.log(menores);

const pessoas = [
    {nome: "Vinicius", idade:18},
    {nome: "Carol", idade:18},
    {nome:"Felipe", idade:30},
    {nome:"Gustavo", idade:20},
];

const pessoasCinco = pessoas.filter(valor => valor.idade >= 20);
const pessoasComO = pessoas.filter(valor => valor.nome.endsWith('o'));
console.log(pessoasCinco);
console.log(pessoasComO);