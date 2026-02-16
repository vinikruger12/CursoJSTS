interface PessoaProtocolo<T, U>{
  nome: T;
  sobrenome: T;
  idade: U;
}

const aluno: PessoaProtocolo<string, number> = {
  nome: "VINICIUYS",
  sobrenome: "MIRANDA",
  idade: 18,
};

console.log(aluno);
