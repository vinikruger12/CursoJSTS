function semRetorno(...args: string[]):void{
  console.log(arguments);
}

semRetorno("calor", "agua");


const pessoa = {
  nome: "Vincius",
  sobrenome: "Kruger",

  exibirNome():void{
    console.log(this.nome + ' ' + this.sobrenome);
  }
}

pessoa.exibirNome();
export { pessoa };
