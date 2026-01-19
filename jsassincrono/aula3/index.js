function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * ((max - min) + min));
}

function esperarAI(msg, tempo){

    return new Promise((resolve, reject) =>{
        if(typeof msg !== 'string') reject("bad value");
        setTimeout(() =>{
        resolve(msg);
    }, tempo)
    })
}

async function executa(){
    try{
    const f1 = await esperarAI("fase 1", rand(1,5));
    console.log(f1);    
    const f2 = await esperarAI("fase 2", rand(1,10));
    console.log(f2);
    const f3 = await esperarAI("fase 3", rand(1,15));   
    console.log(f3);
    }
    catch(e){ console.log(e); }
}
executa();