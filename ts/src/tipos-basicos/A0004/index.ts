const Objeto: {
  chaveA: string,
  chaveB: string,
  chaveC?: string,
  [key: string]: unknown,
} = {
  chaveA: "chaveA",
  chaveB: "chaveB",
};

Objeto.chavelouca = 123;
console.log(Objeto);
