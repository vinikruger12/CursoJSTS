class Pessoa{
  public readonly nome:string;
  public readonly sobrenome: string;
  private readonly idade: number;
  protected readonly cpf: string;

  constructor(nome:string, sobrenome:string, idade:number, cpf: string){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.cpf = cpf;
  }


  static sayHi():void{
    console.log("Hi");
  }

  static criaPessoa(nome: string, sobrenome:string): Pessoa{
    return new Pessoa(nome, sobrenome, 0, "0");
  }

}

const pessoa = new Pessoa("Vinicius", "Kruger", 18, "1234567123");
Pessoa.sayHi();
const pessoa1 = Pessoa.criaPessoa("vinicius", "kruger");
console.log(pessoa1);
