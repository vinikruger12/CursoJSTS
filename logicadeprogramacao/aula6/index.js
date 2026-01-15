function diaSemanaText(data){
    switch (data){
    case 0: 
        return console.log("Domingo");
    case 1: 
        return console.log("Segunda");
    case 2: 
        return console.log("Terca");
    case 3: 
        return console.log("Quarta");
    case 4:
        return console.log("Quinta");
    case 5:
        return console.log("Sexta");
    case 6:
        return console.log("Sabado");
    default: return ;
};
}


const data = new Date();
const diaSemana = data.getDay();
console.log(diaSemanaText(diaSemana));


for(let i = 0;i < 6;i++){
   diaSemanaText(i);
}

