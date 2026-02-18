import { ShoppingCart } from "./entities/shopping-cart";
import { Order } from "./entities/order";
import { Messaging } from "./services/messaging";
import { Persistency } from "./services/persistency";
import { Product } from "./entities/product";

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistenct = new Persistency();

const order = new Order(shoppingCart, messaging, persistenct);

shoppingCart.addItem(new Product("Camiseta", 50));
shoppingCart.addItem(new Product("Caderno", 20));
shoppingCart.addItem(new Product("Caneta", 3));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(order.orderStatus);

order.checkout();
