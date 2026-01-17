function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
};

Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
};

function Camiseta(nome, preco,cor){
    Produto.call(this,nome, preco);
    this.cor = cor;
}

function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome, preco);
    this.material = material;
    
    Object.defineProperty(this, 'estoque',{
        enumerable:true,
        configurable:false,
        get: function(){
            return estoque;
        },
        set: function(valor){
            if(typeof valor !== 'number') return;
            estoque = valor;
        },
    });
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;


Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

const camiseta = new Camiseta("Regata", 10, "Preta");
const caneca = new Caneca("Caneca de cha", 20, "Concreto", 100);
camiseta.aumento(100);
caneca.estoque = 2000;

console.log(caneca);
console.log(camiseta);
