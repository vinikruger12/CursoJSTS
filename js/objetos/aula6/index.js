const objA = {
    chaveA: 'A',
}

const objB = {
    chaveA: 'B',
}

Object.setPrototypeOf(objB, objA);

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));
}

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
}


const p1 = new Produto("Camiseta", 50);
p1.desconto(10);
p1.aumento(10);
console.log(p1);

const p2 = new Produto("Caneca", 20);

Object.setPrototypeOf(p2, Produto.prototype);

const p3 = Object.create(Object.prototype, {
    preco,
    nome,
});

