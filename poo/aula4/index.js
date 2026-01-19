class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume(){
        this.volume += 2;
    }
    dimunuirVolume(){
        this.volume -= 2;
    }

    static trocaPilha(){
        console.log("Trocar a pilha");
    }

}

const c1 = new ControleRemoto("Toshiba");
c1.aumentarVolume();
c1.aumentarVolume();
c1.dimunuirVolume();
console.log(c1);

ControleRemoto.trocaPilha();