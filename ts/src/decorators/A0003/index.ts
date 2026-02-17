function inverteNome(param1: string, param2: string){
  return function <T extends new (...args:any[]) => any> (target:T):T{

  return class extends target {

    cor: string;
    nome: string;

    constructor(...args: any[]){
      super(...args);
      this.nome = args[1];
      this.cor = args[0].split('');
    }
  };
}
}



@inverte("Valor 1", "Valor 2");
class Animal{
  public cor: string;
  public nome: string;
  constructor(cor: string, nome: string){
    this.cor = cor;
    this.nome = nome;
  }
}


const animal = new Animal("Verde", "Kruger");
console.log(animal);
