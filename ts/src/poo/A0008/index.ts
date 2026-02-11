export class Pessoa{
  private readonly nome:string;
  private readonly sobrenome: string;
  private readonly idade: number;
  private  cpf: string;

  constructor(nome:string, sobrenome:string, idade:number, cpf: string){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.cpf = cpf;
  }

  public getIdade():number{
    return this.idade;
  }

  set Cpf(valor:string){
    this.cpf = valor;
  }

  public getCpf():string{
    return this.cpf;
  }

  public getNomeCompleto():string{
    return this.nome + ' ' + this.sobrenome;
  }

}



const pessoa = new Pessoa("Vinicius", "Kruger", 18, "1234567123");

