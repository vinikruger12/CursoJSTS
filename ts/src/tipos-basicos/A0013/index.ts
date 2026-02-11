type Idade = number;
type Pessoa = {
  nome: string,
  idade: Idade,
  salario: number,
  corPreferida?: corPreferida,
};

type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type corPreferida = CorRGB | CorCMYK;

const pessoa: Pessoa = {
  idade: 18,
  nome: "Kruger",
  salario: 200000,
};

function setCorPreferida(pessoa:Pessoa, cor: corPreferida):Pessoa{
  return {...pessoa, corPreferida:cor};
}


console.log(setCorPreferida(pessoa, 'Azul'));
