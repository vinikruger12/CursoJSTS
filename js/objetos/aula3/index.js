function Produto(nome, preco,estoque){
    
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function(){
            return estoque;
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                console.log("Nao");
                return;
            }
            estoque = valor;
        }
    });
}

const p1 = new Produto("Camiseta", 20, 3);
console.log(Object.keys(p1));