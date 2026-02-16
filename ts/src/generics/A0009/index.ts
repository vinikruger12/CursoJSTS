type VotationOption = {
  numberOfvotes: number;
  option: string;
};

class Votation{
  private _votationOptions: VotationOption[] = [];
  public details: string;

  constructor(details: string){
    this.details = details;
  }

  addVotationOption(votationOption: VotationOption): void{
    this._votationOptions.push(votationOption);
  }

  vote(votationIndex:number):void{
    if(!this._votationOptions[votationIndex]) return;
    this._votationOptions[votationIndex].numberOfvotes++;
  }

  get votationOption(): VotationOption[]{
    return this._votationOptions;
  }
}

class VotationApp{
  private votations: Votation[] = [];

  addVotation(votation: Votation): void{
    this.votations.push(votation);
  }

  showVotations(): void{
    for(const votation of this.votations){
      console.log(votation.details);
      for(const votationOption of votation.votationOption){
        console.log(votationOption.option, votationOption.numberOfvotes);
      }
      console.log();
    }
  }
}

const votation1 = new Votation("Qual sua linguagem de programacao favorita");
votation1.addVotationOption({option: "Python", numberOfvotes:0});
votation1.addVotationOption({option: "JavaScript", numberOfvotes:0});
votation1.addVotationOption({option: "TypeScript", numberOfvotes:0});

votation1.vote(1);
votation1.vote(1);
votation1.vote(1);
votation1.vote(2);
votation1.vote(0);

const votation2 = new Votation("Qual sua cor favorita");
votation2.addVotationOption({option: "Vermelho", numberOfvotes:0});
votation2.addVotationOption({option: "Verde", numberOfvotes:0});
votation2.addVotationOption({option: "Azul", numberOfvotes:0});

votation2.vote(1);
votation2.vote(1);
votation2.vote(1);
votation2.vote(2);
votation2.vote(0);


const votationApp = new VotationApp();
votationApp.addVotation(votation1);
votationApp.addVotation(votation2);

votationApp.showVotations();
