const data = new Date();
const h1 = document.querySelector('.data');

const diaSemanaNum = data.getDate();
const dia = data.getDay();
const mes = data.getMonth() + 1;
const ano = data.getFullYear();
const hora = data.getHours();
const minutos = data.getMinutes();

function weekDay(data){
    switch(data){
        case 0: return "Domingo";
        case 1: return "Segunda";
        case 2: return "Terca";
        case 3: return "Quarta";
        case 4: return "Quinta";
        case 5: return "Sexta";
        case 6: return "Sabado";
    };
}

function month(mes){
    switch(mes){
        case 1: return "Janeiro";
        case 2: return "Fevereiro";
        case 3: return "Marco";
        case 4: return "Abril";
        case 5: return "Maio";
        case 6: return "Junho";
        case 7: return "Julho ";
        case 8: return "Agosto";
        case 9: return "Setembro";
        case 10: return "Outubro";
        case 11: return "Novembro";
        case 12: return "Dezembro";
    };
}

const diaSemana = weekDay(dia);
const mees = month(mes);

h1.innerHTML = diaSemana + ', ' + diaSemanaNum + ' de ' + mees + ' de ' + ano + ' '+  hora + ':' + minutos; 