class Pessoa<T, U>{
  public nome: T;
  public idade: U;

  constructor(nome: T, idade: U){
    this.nome = nome;
    this.idade = idade;
  }

}

class Pilha<T>{
  private contador:number = 0;
  private elementos:{[k:number]: T} = {};

  push(elemento: T): void{
    this.elementos[this.contador] = elemento;
    this.contador++;
  }

  pop():T | void{
    if(this.isEmpty()) return undefined;

    this.contador--;
    const elemento = this.elementos[this.contador];
    delete this.elementos[this.contador];
    return elemento;

  }


  isEmpty(): boolean{
    return this.contador === 0;
  }

  tamanho(): number{
    return this.contador;
  }

  mostraChave(): void{
    for(const chave in this.elementos){
      console.log(this.elementos[chave]);
    }
  }

}

const pilha = new Pilha<number>();
pilha.push(1);
pilha.push(2);
pilha.push(3);
pilha.push(4);

pilha.mostraChave();

while(!pilha.isEmpty()){
  console.log(pilha.pop());
}

