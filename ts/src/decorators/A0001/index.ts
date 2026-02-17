@decorator
class Animal{
  public cor: string;
  public nome: string;
  constructor(cor: string, nome: string){
    this.cor = cor;
    this.nome = nome;
  }
}

function decorator<T extends new (...args:any[]) => any> (target:T):T{

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


const animal = new Animal("Verde", "Kruger");
console.log(animal);
