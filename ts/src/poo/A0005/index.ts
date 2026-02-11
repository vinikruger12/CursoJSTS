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

  public getIdade():number{
    return this.idade;
  }

  public getCpf():string{
    return this.cpf;
  }

  public getNomeCompleto():string{
    return this.nome + ' ' + this.sobrenome;
  }

}

class Aluno extends Pessoa{
  public getNomeCompleto():string{
    return "Isso vem do aluno " + this.nome + ' ' + this.sobrenome;
  }
}

class Cliente extends Pessoa{
  public getNomeCompleto():string{
    return "Isso vem do cliente " + this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa("Vinicius", "Kruger", 18, "1234567123");
const aluno = new Aluno("Vinicius", "Kruger", 18, "1234567123");
const cliente = new Cliente("Vinicius", "Kruger", 18, "1234567123");

console.log(pessoa);
console.log(aluno);
console.log(cliente);

console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
