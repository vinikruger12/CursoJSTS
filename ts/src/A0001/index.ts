let nome: string = "Kruger";

let vetor: Array<number> = [1,2,3,4];
console.log(vetor);

let saudacoes: string[] = ["Ola", "oi", "Tudo bem"];
console.log(saudacoes);

let pessoa: { nome: string, idade: number} = {
  nome: "Vinicius",
  idade: 18
};

console.log(pessoa);

function soma(x:number, y:number){
  return x + y;
}

let a = (soma(1,6));
console.log(a);
