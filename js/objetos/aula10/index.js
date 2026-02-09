function criaPessoa(nome, sobrenome){
    
    const pessoaPrototype = {
        falar(){
            console.log(this.nome + "fala");
        },
        
        comer(){
            console.log(this.nome + "comer");
        },
    }


    return Object.create(pessoaPrototype,{
        nome: {value: nome},
        sobrenome:{value:sobrenome},
    });
}

const p1 = criaPessoa("Vinicius", "Kruger");