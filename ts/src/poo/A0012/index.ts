class Escritor{
  private nome:string;
  private ferramenta: Ferramenta | null = null;
  constructor(nome: string){
    this.nome = nome;
  }

  getNome():string{
    return this.nome;
  }
  setFerramenta(ferramenta: Ferramenta | null){
    this.ferramenta = ferramenta;
  }
  getFerramenta():Ferramenta | null{
    return this.ferramenta;
  }

  escrever():void{
    if(this.ferramenta === null){
      console.log("Nao e possivel escrever sem uma ferramenta");
      return;
    }

    this.ferramenta.escrever();
  }
}

abstract class Ferramenta{
  protected nome: string;
  constructor(nome: string){
    this.nome = nome;
  }

  getNome():string{
    return this.nome;
  }

  abstract escrever():void;
}

class Caneta extends Ferramenta{
  escrever(): void {
    console.log(this.nome + " esta escrevendo");
  }
}

class MaquinaEscrever extends Ferramenta{
  escrever(): void {
    console.log(this.nome + " esta digitando");
  }
}

const escritor = new Escritor("Vinicius");
const caneta = new Caneta("Bic");
const maquinaEscrever = new MaquinaEscrever("Phillips");

console.log(escritor.getNome());
console.log(caneta.getNome());
console.log(maquinaEscrever.getNome());
escritor.setFerramenta(maquinaEscrever);
escritor.escrever();
