abstract class Personagem{
  protected abstract emoji: string;
  protected nome:string;
  protected ataque: number;
  protected vida: number;

  constructor(nome: string, ataque: number, vida: number){
    this.ataque = ataque;
    this.nome = nome;
    this.vida = vida;
  }

  atacar(personagem: Personagem):void{
    this.bordao();
    console.log(this.emoji + ' ' + this.nome + ' esta atacando');
    personagem.perderVida(this.ataque);
  }

  perderVida(forcaAtaque:number):void{
    this.vida -= forcaAtaque;
    console.log(this.emoji + ' ' + this.nome + ' agora tem ' + this.vida + ' de vida');
  }

  abstract bordao():void;

}

class Guerreira extends Personagem{

  protected emoji = '\u{1F9DD}';

  bordao(): void {
    console.log(this.emoji + "Vai tomandoooooooo");
  }
}

class Monstro extends Personagem{

  protected emoji = '\u{1F9DF}';

  bordao(): void {
    console.log(this.emoji + "UAAAAAAAAAAA");
  }
}

const guerreira = new Guerreira('Guerreira', 100, 1000);
const monstro = new Monstro("Monstro", 80, 1000);

for(let i = 0;i < 3;i++){
  guerreira.atacar(monstro);
}

for(let i = 0;i < 2;i++){
  monstro.atacar(guerreira);
}

