function add(a:unknown, b:unknown): number | string{
  if(typeof a === 'number' && typeof b === 'number') return a + b;
  return 'a+b';
}

type Pessoa = {nome: string};
type Animal = {cor: string};
type PessoaOuAnimal = Pessoa | Animal;

class Aluno implements Pessoa{
  public nome: string;
  constructor(nome: string){
    this.nome = nome;
  }
}

function mostraNome(obj: PessoaOuAnimal):void{
  if('nome' in obj) console.log(obj.nome);
  if(obj instanceof Aluno) console.log(obj.nome);
}

mostraNome(new Aluno("Kruger"));
