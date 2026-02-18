type CartItem = {name: string, price: number};
type OrderStatus = 'open' | 'closed';

class ShoppingCartLegacy {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus  = 'open';

  addItem(item: CartItem):void{
    this._items.push(item);
  }

  removeItem(index: number):void{
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]>{
    return this._items;
  }

  get orderStatus():OrderStatus{
    return this._orderStatus;
  }

  total(): number{
    let total = 0;
    for(let i = 0;i < this._items.length;i++){
      total += this._items[i]?.price;
    }
    return total;
  }

  checkout(): void{
    if(this.isEmpty()){
      console.log("Seu carrinho esta vazio");
      return;
    }


    this._orderStatus = 'closed';
    this.sendMessage("Seu pedido de " + this.total() + " reais foi recebido");
    this.saveOrder();
    this.clear();
  }

  sendMessage(msg: string): void{
    console.log(msg);
  }

  saveOrder(): void{
    console.log("Pedido salvo com sucesso");
  }

  clear(): void{
    console.log("Carrinho de compras limpo");
    this._items.length = 0;
  }

  isEmpty():boolean{
    return this._items.length === 0;
  }
}

const shoppingCart = new ShoppingCartLegacy();
shoppingCart.addItem({name: "Camiseta", price: 50});
shoppingCart.addItem({name: "Caderno", price: 20});
shoppingCart.addItem({name: "Caneta", price: 3});


console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.orderStatus);

shoppingCart.checkout();

