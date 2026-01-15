function main(){
    const form = document.querySelector('.form');

    const pesoInput = form.querySelector("#peso");
    const alturaInput = form.querySelector("#altura");
    const resultado = document.querySelector('.resultado');

    function recebeEventoForm (evento){
        evento.preventDefault();

        resultado.innerHTML = "";
        resultado.style.backgroundColor = "";

        const peso = Number(pesoInput.value);
        const altura = Number(alturaInput.value);

        const imc = (peso / (altura * altura));

        if(isNaN(peso) && isNaN(altura)){
            resultado.innerHTML = "Invalido";
            resultado.style.backgroundColor = 'red';
            return;
        }

        if(peso === 0 && altura === 0){
            resultado.innerHTML = "Invalido";
            resultado.style.backgroundColor = 'red';
            return;
        }

        if(isNaN(peso) || peso === 0){
            resultado.innerHTML = "Peso invalido";
            resultado.style.backgroundColor = 'red';
            return;
        }
        
        if(isNaN(altura) || altura === 0){
            resultado.innerHTML = "Altura invalida";
            resultado.style.backgroundColor = 'red';
            return;
        }

        let mensagem;
        if(imc < 18.5) mensagem = "Abaixo do peso";
        else if(imc < 25) mensagem = "Peso normal";
        else if(imc < 30) mensagem = "Sobrepeso";
        else if(imc < 35) mensagem = "Obesidade grau 1";
        else if(imc < 40) mensagem = "Obesidade grau 2";
        else mensagem = "Obesidade grau 3";

         resultado.style.backgroundColor = 'rgb(150, 236, 175)';
        resultado.innerHTML = "Seu IMC eh " + imc.toFixed(2) + '( ' + mensagem + ' )';

    }
    
    form.addEventListener("submit", recebeEventoForm);

}
main();