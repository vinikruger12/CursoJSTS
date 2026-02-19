import { OrderStatus } from "./interfaces/order-status";

import { CustomerOrder } from "./interfaces/customer-protocol";
import { ShoppingCartProtocol } from "./interfaces/shopping-cart-protocol";
import { MessagingProtocol } from "./interfaces/messasing-protocol";
import { PersistencyProtocol } from "./persistency-protocol";

export class Order {
  private _orderStatus: OrderStatus = "open";

  private readonly cart: ShoppingCartProtocol;
  private readonly messaging: MessagingProtocol;
  private readonly persistency: PersistencyProtocol;
  private readonly customer: CustomerOrder;

  constructor(
    cart: ShoppingCartProtocol,
    messaging: MessagingProtocol,
    persistenct: PersistencyProtocol,
    customer: CustomerOrder,
  ) {
    this.cart = cart;
    this.messaging = messaging;
    this.persistency = persistenct;
    this.customer = customer;
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
      "Seu pedido de " + this.cart.totalWithDiscount() + " reais foi recebido",
    );
    this.persistency.saveOrder();
    this.cart.clear();
    console.log("Cliente " + this.customer.getName() + ': ' +this.customer.getIDN());
  }
}
