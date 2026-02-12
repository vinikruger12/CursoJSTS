class Carro{
  private readonly motor: Motor = new Motor();

  ligar():void{
    this.motor.ligar();
  };

  acelerar():void{
    this.motor.acelerar();
  };

  parar():void{
    this.motor.parar();
  };

  desligar():void{
    this.motor.desligar();
  }
}

class Motor{
  ligar():void{
    console.log("Motor esta ligado");
  };

  acelerar():void{
    console.log("Motor esta acelerando");
  };

  parar():void{
    console.log("Motor esta parado");
  };

  desligar():void{
    console.log("Motor esta desligado");
  }
}

const carro1 = new Carro();
carro1.acelerar();
carro1.ligar();
carro1.parar();
carro1.desligar();
