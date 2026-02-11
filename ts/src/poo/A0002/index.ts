class Empresa {
  public readonly nome: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome:string, cnpj: string){
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void{
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores():void{
    for(let i = 0;i < this.colaboradores.length;i++){
      console.log(this.colaboradores[i]);
    }
  }

}

class Colaborador{
  public readonly nome: string;
  public readonly sobrenome: string;

  constructor(nome:string, sobrenome:string){
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}

const empresa1 = new Empresa("google", "123456789");
const colaborador1 = new Colaborador("Vinicius", "Kruger");
const colaborador2 = new Colaborador("Fabricio", "Kruger");
const colaborador3 = new Colaborador("Leticia", "Kruger");

empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);

empresa1.mostrarColaboradores();
console.log(empresa1);
