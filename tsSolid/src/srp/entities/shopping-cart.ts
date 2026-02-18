import { CartItem } from "./interfaces/car-item";

export class ShoppingCart {
  private readonly _items: CartItem[] = [];

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  total(): number {
    let total = 0;
    for (let i = 0; i < this._items.length; i++) {
      total += this._items[i]?.price ?? 0;
    }
    return total;
  }

  clear(): void {
    console.log("Carrinho de compras limpo");
    this._items.length = 0;
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }
}
