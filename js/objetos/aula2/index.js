function Produto(nome, preco,estoque){
    Object.defineProperties(this,{
        
        nome: {
            enumerable: true,
            value: nome,
            writable: false,
            configurable: false,
        },

        preco: {
             enumerable: true,
            value: preco,
            writable: false,
            configurable: false,
        },
        
    });

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        value: estoque,
        writable: false,
        configurable: false,
    });
}

const p1 = new Produto("Camiseta", 20, 3);
console.log(Object.keys(p1));