const nome = "vinicius";
const sobrenome = "kruger";
const idade = 18;

function soma(x,y){
    return x + y;
}

export class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

export default () => console.log("Ola mundo");

export {nome};
export {sobrenome};