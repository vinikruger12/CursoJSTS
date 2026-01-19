class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }
    
    ligar(){
        if(this.ligado){
            console.log(this.nome + " ja esta ligado");
            return;
        }

        this.ligado = true;
    }

    desligar(){
        if(!this.ligado){
            console.log(this.nome + " ja esta desligado");
            return;
        }

        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico{
    constructor(nome, cor, marca){
        super(nome);
        this.cor = cor;
        this.marca = marca;
    }
}

class Tablet extends DispositivoEletronico{
    constructor(nome, temWifi){
        super(nome);
        this.temWifi = temWifi;
    }

    ligar(){
        console.log("Olha voce alterou o metodo ligar mas nao vai realmente ligar");
    }
}


const d1 = new DispositivoEletronico("Celular");
d1.ligar();
d1.ligar();
d1.desligar();
d1.desligar();
console.log(d1);

const celular = new Smartphone("Celular", "Preto", "Iphone");
console.log(celular);

const t1 = new Tablet("tablet", true);
t1.ligar();
console.log(t1);