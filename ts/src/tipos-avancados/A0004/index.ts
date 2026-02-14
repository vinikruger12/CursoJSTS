class Calculator{
  public number: number;

  constructor(number:number){
    this.number = number;
  }

  add(n:number):this{
    this.number += n;
    return this;
  }

  sub(n:number):this{
    this.number -= n;
    return this;
  }

  div(n:number):this{
    this.number /= n;
    return this;
  }

  mult(n:number):this{
    this.number *= n;
    return this;
  }
}

const calculadora = new Calculator(10);
calculadora.add(5).mult(10);
console.log(calculadora);
