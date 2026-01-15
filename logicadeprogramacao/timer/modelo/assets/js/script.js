function getTimeFromSeconds(seconds){
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-br',{
        hour12:false,
        timeZone: 'UTC'
    });
}


const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let seconds = 0;
let timer; 

function iniciaRelogio(){
    timer = setInterval(function(){
        seconds++;
        relogio.innerHTML = getTimeFromSeconds(seconds); 
    }, 1000);
}

document.addEventListener('click', function(e){
    const element = e.target;

    if(element.classList.contains('zerar')){
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        seconds = 0;
        relogio.classList.remove('pausado');
    }   
    else if(element.classList.contains('iniciar')){
        relogio.classList.remove('pausado');
        clearInterval(timer);
        iniciaRelogio();
    }
    else if(element.classList.contains('pausar')){
        relogio.classList.add('pausado');
    clearInterval(timer);
    }
});
