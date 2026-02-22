import { CartItem } from "./interfaces/car-item";
import { MessagingProtocol } from "./interfaces/messasing-protocol";
import { ShoppingCartProtocol } from "./interfaces/shopping-cart-protocol";
import { Order } from "./order";
import { PersistencyProtocol } from "./persistency-protocol";

class ShoppingCartMock implements ShoppingCartProtocol {
  get items(): Readonly<CartItem[]>{
    return []
  }

    addItem(item: CartItem): void {}
    removeItem(index: number): void {}
    total(): number {return 1}
    totalWithDiscount():number {return 1}
    clear(): void {}
    isEmpty(): boolean {return false}
}

class MessasingMock implements MessagingProtocol{
  sendMessage(msg: string): void {}
}

class PersistencyMock implements PersistencyProtocol{
  saveOrder(): void {}
}

class CostumerMock implements CostumerMock{
  getName(){return ''};
  getIDN(){return ''};
}

const makeSut = () => {
  const shoppingCartMock = new ShoppingCartMock();
  const messasingMock = new MessasingMock();
  const persistencyMock = new PersistencyMock();
  const customerMock = new CostumerMock();
  const sut = new Order(shoppingCartMock, messasingMock, persistencyMock, customerMock);
  return {sut, shoppingCartMock, messasingMock, persistencyMock};
}

describe("Order", () =>{
  it('should not checkout if cart is empty', () =>{
    const { sut, shoppingCartMock } = makeSut();
    const shoppingCartMockSpy = jest.spyOn(shoppingCartMock, 'isEmpty').mockReturnValueOnce(true);
    sut.checkout();
    expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
    expect(sut.orderStatus).toBe('open');
  })

  it('should not checkout if cart is not empty', () =>{
    const { sut, shoppingCartMock } = makeSut();
    const shoppingCartMockSpy = jest.spyOn(shoppingCartMock, 'isEmpty').mockReturnValueOnce(false);
    sut.checkout();
    expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
    expect(sut.orderStatus).toBe('closed');
  })

  it('should send a message to the client', () =>{
    const { sut, messasingMock } = makeSut();
    const messasingMockSpy = jest.spyOn(messasingMock, 'sendMessage');
    sut.checkout();
    expect(messasingMockSpy).toHaveBeenCalledTimes(1);
  })

  it('should send a message to the client', () =>{
    const { sut, persistencyMock } = makeSut();
    const persistencyMockSpy = jest.spyOn(persistencyMock, 'saveOrder');
    sut.checkout();
    expect(persistencyMockSpy).toHaveBeenCalledTimes(1);
  })

  it('should clear cart', () =>{
    const { sut, shoppingCartMock } = makeSut();
    const shoppingCartMockSpy = jest.spyOn(shoppingCartMock, 'clear');
    sut.checkout();
    expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
  })

})
