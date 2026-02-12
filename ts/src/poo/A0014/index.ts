class CarrinhoDeCompras{
  private readonly produtos: Produto[] = [];

  inserirProdutos(...produtos: Produto[]):void{
    for(let i = 0;i < produtos.length;i++){
      this.produtos.push(produtos[i]);
    }
  }

  quantidade():number{
    return this.produtos.length;
  }

  valorTotal():number{
    let total: number = 0;

    for(let i:number = 0;i < this.produtos.length;i++){
      total += this.produtos[i].preco;
    }
    
    return total;
  }
}

class Produto{
  public nome: string;
  public preco: number;

  constructor(nome: string, preco: number){
    this.nome = nome;
    this.preco = preco;
  }
}

const produto1 = new Produto("Camisa", 100);
const produto2 = new Produto("Cueca", 77);
const produto3 = new Produto("Souvenir", 55);

const carrinho = new CarrinhoDeCompras();
carrinho.inserirProdutos(produto1, produto2, produto3);
console.log(carrinho);
console.log(carrinho.quantidade());
console.log(carrinho.valorTotal());
