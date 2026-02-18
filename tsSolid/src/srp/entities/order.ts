import { OrderStatus } from "./interfaces/order-status";
import { ShoppingCart } from "./shopping-cart";
import { Messaging } from "../services/messaging";
import { Persistency } from "../services/persistency";

export class Order {
  private _orderStatus: OrderStatus = "open";

  private readonly cart: ShoppingCart;
  private readonly messaging: Messaging;
  private readonly persistency: Persistency;

  constructor(
    cart: ShoppingCart,
    messaging: Messaging,
    persistenct: Persistency,
  ) {
    this.cart = cart;
    this.messaging = messaging;
    this.persistency = persistenct;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log("Seu carrinho esta vazio");
      return;
    }

    this._orderStatus = "closed";
    this.messaging.sendMessage(
      "Seu pedido de " + this.cart.total() + " reais foi recebido",
    );
    this.persistency.saveOrder();
    this.cart.clear();
  }
}
