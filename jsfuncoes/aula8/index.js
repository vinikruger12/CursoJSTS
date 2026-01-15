function criaPessoa(nome,sobrenome,a,p){
    return{
        nome,
        sobrenome,
        fala(assunto){
            return nome + ' ' + sobrenome + ' esta falando ' + assunto;
        },
        peso:p,
        altura:a,
        get imc(){
            const indice = this.peso/(this.altura**2);
            return indice.toFixed(2);
        },
        get nomecompleto(){
            return nome + ' ' + sobrenome;
        }
    };
};

const p1 = criaPessoa("Vinicius", "Kruger", 1.83,70);
console.log(p1.fala("sobre pokemon"));
console.log(p1.imc);
console.log(p1.nomecompleto);
