function Pessoa(nome, sobrenome){
    
    this.nome = nome,
    this.sobrenome = sobrenome,

    this.nomeCompleto = function() {
        return nome + ' ' + sobrenome;        
    }
    
}

const p1 = new Pessoa("Vinicius", "Kruger");
console.log(p1.nomeCompleto());