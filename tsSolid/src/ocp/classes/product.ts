import { CartItem } from "./interfaces/car-item";

export class Product implements CartItem {
  public name: string;
  public price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}
