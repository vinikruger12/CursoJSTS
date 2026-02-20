import { CartItem } from "./car-item";

export interface ShoppingCartProtocol {

  items: Readonly<CartItem[]>;

  addItem(item: CartItem): void;
  removeItem(index: number): void;
  total(): number;
  totalWithDiscount():number;
  clear(): void ;
  isEmpty(): boolean;
}
