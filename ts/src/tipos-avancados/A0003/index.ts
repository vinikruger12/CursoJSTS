type Veiculo = {
  marca: string;
  ano: number;
}

type Car = {
  brand: Veiculo['marca'];
}
