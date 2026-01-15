const pessoa1 = {
    nome: "Vinicius",
    sobrenome: "Kruger",
    idade: 18,

    fala(){
        console.log(this.nome, 'ola');
    }

};

function criaPessoa(nome, sobrenome, idade){
    return{ nome,sobrenome,idade };
}

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);

pessoa1.fala();