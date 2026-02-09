const numeros = [1,2,3,4,5,6,7,8,9,11,12,14,15,16,17,18];

const dobra = numeros.map(valor => valor*2);
console.log(dobra);

const pessoas = [
    {nome: "Vinicius", idade:18},
    {nome: "Carol", idade:18},
    {nome:"Felipe", idade:30},
    {nome:"Gustavo", idade:20},
];

const nomes = pessoas.map(valor => valor.nome);
const idades = pessoas.map(valor => ({idade: valor.idade}));
const comId = pessoas.map((valor, indice) =>{
    valor.id = indice;
    return valor;
});
console.log(nomes);
console.log(idades);
console.log(comId);