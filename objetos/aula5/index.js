function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

}

Pessoa.prototype.nomeCompleto = function(){
    return this.nome + ' ' + this.sobrenome;
};

const p1 = new Pessoa("Vinicius", "Kruger");