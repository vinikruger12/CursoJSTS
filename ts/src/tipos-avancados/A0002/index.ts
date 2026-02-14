type CoresObj = typeof coresObj;
type CoresChaves = keyof CoresObj;

const coresObj = {
  vermelho: 'red',
  azul: 'blue',
  verde: 'green',
}

function traduzirCor(cor: CoresChaves, cores: CoresObj): string{
  return cores[cor];
}

console.log(traduzirCor('vermelho', coresObj));


