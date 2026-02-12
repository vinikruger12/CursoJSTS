type TipoPessoa = {
  nome: string;
  sobrenome: string;
  nomeCompleto(): string;
}

class Pessoa implements TipoPessoa{
  nome: string;
  sobrenome: string;

  constructor(nome: string, sobrenome: string){
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }

}

const pessoa = new Pessoa("Vinicius", "Kruger");
console.log(pessoa.nomeCompleto());
