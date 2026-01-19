class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log(this.nome + "esta falando");
    }

    nomeCompleto(){
        return this.nome + this.sobrenome;
    }

}

const p1 = new Pessoa("Vinicius", "Kruger"); 
console.log(p1.nomeCompleto());