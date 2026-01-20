import ValidaCPF from './validaCPF';

export default class GeraCPF{
    rand(min = 100000000, max = 999999999){
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    geraNovoCpf(){
        const cpfSemDigito = this.rand();
        const digito1 = ValidaCPF.criaDigito(cpfSemDigito);
        const digito2 = ValidaCPF.criaDigito(cpfSemDigito + digito1);
        const novoCpf = cpfSemDigito + digito1 + digito2;

        return novoCpf;
    }
}