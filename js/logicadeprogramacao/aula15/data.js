function retornaHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError("Esperando instancia de data");
    }

    if(!data){
        data = new Date();
    }

    try{
    return data.toLocaleTimeString('pt-br',{
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit',
        hour12:false
    });
    }catch(erro){
        console.log("Deu erro amigao");
    }
}

const hora = retornaHora();
console.log(hora);