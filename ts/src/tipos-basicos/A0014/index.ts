type TemNome = {nome: string};
type TemSobrenome = {sobrenome: string};
type TemIdade = {idade: number};
type Pessoa = TemNome & TemSobrenome & TemIdade;

const pessoa1: Pessoa = {
  nome: "Vinicius",
  sobrenome: "Kruger",
  idade: 18,
};

console.log(pessoa1);
