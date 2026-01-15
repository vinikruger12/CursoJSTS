const lista = [1,2,3,4]
console.log(lista);
lista.pop();
lista.shift();
lista.push("Vinicius");
lista.unshift("Carol");

for(let i = 0;i < lista.length;i++){
    console.log(lista[i]);
}

console.log(typeof(lista));

console.log(lista[2].toString(2));