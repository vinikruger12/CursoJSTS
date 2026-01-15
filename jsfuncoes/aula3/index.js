const soma = (a,b) =>{
    return a+b;
}

const s1 = soma(1,2);
console.log(s1);

function criaPessoa(nome, sobrenome){
    return {nome, sobrenome};
}

const p1 = criaPessoa("Vinicius", "Kruger");
console.log(p1.nome, p1.sobrenome);