let n1 = Number(prompt("Digite um numero"));
const numeroTitulo = document.getElementById('numero-titulo');
const raiz = document.getElementById('raiz');
const nan = document.getElementById('nan');
const cima = document.getElementById('cima');
const baixo = document.getElementById('baixo');
const duas = document.getElementById('duas');


numeroTitulo.innerHTML = n1;
raiz.innerHTML = Math.sqrt(n1);
nan.innerHTML = isNaN(n1);
cima.innerHTML = Math.ceil(n1);
baixo.innerHTML = Math.floor(n1);
duas.innerHTML = n1.toFixed(2);




