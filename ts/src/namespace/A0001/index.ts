namespace MeuNamespace {
    const nome = "Vinicius";

    class PessoaDoNamespace{
      public nome: string;
      constructor(nome: string){
        this.nome = nome;
      }
    }

    const pessoa = new PessoaDoNamespace("Vinicius");
    console.log(pessoa, nome);
}
