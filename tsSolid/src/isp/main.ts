import { ShoppingCart } from "./classes/shopping-cart";
import { Order } from "./classes/order";
import { Messaging } from "./services/messaging";
import { Persistency } from "./services/persistency";
import { Product } from "./classes/product";
import { FiftyPercentDiscount } from "./classes/discount";

const fiftyPercentDiscount = new FiftyPercentDiscount();
const shoppingCart = new ShoppingCart(fiftyPercentDiscount);
const messaging = new Messaging();
const persistenct = new Persistency();

const order = new Order(shoppingCart, messaging, persistenct);

shoppingCart.addItem(new Product("Camiseta", 50));
shoppingCart.addItem(new Product("Caderno", 20));
shoppingCart.addItem(new Product("Caneta", 3));

console.log(shoppingCart.items);
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);

order.checkout();
