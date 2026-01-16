const pessoa = {
    nome: 'Vinicius',
    sobrenome: "Kruger",
    idade: 19,
    falarNome(){
        return this.nome + " fala seu nome";
    },

    anoDeNascimento(){
        const dataAtual = new Date();
        return dataAtual.getFullYear() - this.idade;
    },
};  

console.log(pessoa.falarNome());
console.log(pessoa.anoDeNascimento());
