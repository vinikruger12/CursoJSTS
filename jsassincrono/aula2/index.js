function rand(min, max){
    min *= 1000;
    max *= 1000;
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

const promises = ['Primeiro valor',
    esperarAI('Promise 1', 1000),
    esperarAI('Promise 2', 1000),
    esperarAI('Promise 3', 1000),
    'Outro valor'
]

Promise.race(promises)
 .then(function(valor){
    console.log(valor);
 })
 .catch(function(erro){
    console.log(erro);
 })