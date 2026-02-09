const nomes = ["Vinicius", "Carol", "Patricia"];

const vector = [...nomes];
vector.push("Rodrigo");
nomes.push("Joana");

for(let i = 0;i < nomes.length;i++){
    console.log(nomes[i], vector[i]);
}

const newNames = nomes.slice(1, 3);
console.log(newNames);

const nome = "Vinicius Moreira Kruger";
const vetor = nome.split(' ');
console.log(vetor);