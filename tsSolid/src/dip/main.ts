import { ShoppingCart } from "./classes/shopping-cart";
import { Order } from "./classes/order";
import { Messaging } from "./services/messaging";
import { Persistency } from "./services/persistency";
import { Product } from "./classes/product";
import { FiftyPercentDiscount } from "./classes/discount";
import { EnterpriseCustomer, IndividualCustomer } from "./classes/customer";
import { MessagingProtocol } from "./classes/interfaces/messasing-protocol";

const fiftyPercentDiscount = new FiftyPercentDiscount();
const shoppingCart = new ShoppingCart(fiftyPercentDiscount);
const persistenct = new Persistency();
const customer = new IndividualCustomer("Vincius", "Moreira", "1231241234");
const empresario = new EnterpriseCustomer("Google", "3029423094");

class MessagingMock implements MessagingProtocol{
  sendMessage(msg: string): void {
    console.log("Mensagem enviada pelo MOCK");
  }
}

const messaging = new MessagingMock();


const order = new Order(shoppingCart, messaging, persistenct, empresario);


shoppingCart.addItem(new Product("Camiseta", 50));
shoppingCart.addItem(new Product("Caderno", 20));
shoppingCart.addItem(new Product("Caneta", 3));

console.log(shoppingCart.items);
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);

order.checkout();

console.log(order.orderStatus);

