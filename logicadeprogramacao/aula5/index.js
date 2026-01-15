//##const tresHoras = 60*60*3*1000;
//const umDia = 1000 * 24 * 60 * 60;
const data = new Date(123124235251344);
console.log('Dia', data.getDate());
console.log('Mes', data.getMonth());
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('Ms', data.getMilliseconds());
console.log('Dia da semana', data.getDay());

console.log(data.toString());

function formataData(data){
    const dia = data.getDay();
    const mes = data.getMonth();
    const ano = data.getFullYear();

    return dia  + '/' + (mes + 1)  + '/' + ano;
} 

const datao = new Date();
console.log(formataData(datao));