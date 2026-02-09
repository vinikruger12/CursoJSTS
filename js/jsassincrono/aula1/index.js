function rand(min, max){
    min *= 10;
    max *= 100;
    return Math.floor(Math.random() * (max -min) + min);
}

function esperarAI(msg, tempo){

    return new Promise((resolve, reject) =>{
        if(typeof msg !== 'string') reject("bad value");
        setTimeout(() =>{
        resolve(msg);
    }, tempo)
    })
}

esperarAI("frase 1", rand(1,3))
 .then(resposta => {
    console.log(resposta);
    return esperarAI("frase 2", rand(1, 5))
 }).then(resposta => {
    console.log(resposta);
    return esperarAI(123, rand(1,7));
 }).then(resposta =>{
    console.log(resposta);
 })
 .catch(e=>{
    console.log("erro", e);
 });
