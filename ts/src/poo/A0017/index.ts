interface tipoNome {
  nome: string;
}
interface tipoSobrenome {
  sobrenome: string;

}

interface tipoNomeCompleto {
  nomeCompleto(): string;

}

interface TipoPessoa extends tipoNome, tipoSobrenome, tipoNomeCompleto {}

export class Pessoa implements TipoPessoa{
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
