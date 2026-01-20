export default class ValidaCPF{
    constructor(cpfEnviado){
        this.cpfLimpo = cpfEnviado.replace(/\D+/g, '');
    }

    valida(){
        if(typeof this.cpfLimpo === "undefined") return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.isSequencia()) return false;

        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.criaDigito(cpfParcial);
        const digito2 = ValidaCPF.criaDigito(cpfParcial + digito1);

    
        const novoCpf = cpfParcial + digito1 + digito2;
    
        return novoCpf === this.cpfLimpo;
    }

    static criaDigito(cpfParcial){
        const cpfArray = Array.from(cpfParcial);

        let regressivo = cpfArray.length + 1;
        let acumulador = 0;

        for(let i = 0;i < cpfArray.length;i++){
        acumulador += Number(cpfArray[i]) * regressivo;
        regressivo--;
        }
    

        let digito = 11 - (acumulador % 11);
        if(digito > 9) digito = 0;
    
        return digito;
    }

    isSequencia(){
        return this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo;
    }
}

const newCPF = new ValidaCPF("111.111.111.11");
console.log(newCPF.valida());


