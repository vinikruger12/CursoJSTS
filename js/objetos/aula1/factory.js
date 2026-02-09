function criaPessoa(nome, sobrenome){
    return{
        nome,
        sobrenome,

        get nomeCompleto(){
            return this.nome + ' ' + this.sobrenome;
        }
    };
}

const p1 = criaPessoa("Vinicius", "Kruger");
console.log(p1.nomeCompleto);