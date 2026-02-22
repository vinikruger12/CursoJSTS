import { Discount } from "./discount";
import { CartItem } from "./interfaces/car-item";
import { ShoppingCart } from "./shopping-cart";

const createSut = () =>{
  const discountMock = createDiscountMock();
  const sut = new ShoppingCart(discountMock);
  return {sut, discountMock};
}

const createDiscountMock = () =>{
  class DiscountMock extends Discount {};
  return new DiscountMock();
}

const createCartItem = (name: string, price: number) =>{
  class CartItemMock implements CartItem {
    public name: string;
    public price: number;

    constructor(name: string, price: number){
      this.name = name;
      this.price = price;
    }
  };

  return new CartItemMock(name, price);
}

const createSutWithProducts = () =>{
  const { sut, discountMock } = createSut();
  const cartItem1 = createCartItem("Camisa", 10);
  const cartItem2 = createCartItem("Caneta", 2);
  sut.addItem(cartItem1);
  sut.addItem(cartItem2);
  return {sut, discountMock};
}

describe("ShoppingCart", () => {
  it('should be empty when innicialized', () =>{
    const { sut } = createSut();
    expect(sut.isEmpty()).toBe(true);
  })

  it('should have two items', () =>{
    const { sut } = createSutWithProducts();
    expect(sut.items.length).toBe(2);
  })

  it('should test total and total with discount', () =>{
    const { sut } = createSutWithProducts();
    expect(sut.total()).toBe(12);
    expect(sut.totalWithDiscount()).toBe(12);
  })

  it('should remove and then clear', () =>{
    const { sut } = createSutWithProducts();
    sut.removeItem(sut.items.length - 1);
    expect(sut.items.length).toBe(1);
    sut.clear();
    expect(sut.isEmpty()).toBe(true);
  })

  it('should call discount.calculate once when totalWithDiscount is called', () =>{
    const { sut, discountMock } = createSutWithProducts();
    const discountMockSpy = jest.spyOn(discountMock, 'calculate');
    sut.totalWithDiscount();
    expect(discountMockSpy).toHaveBeenCalledTimes(1);
  })

  it('should call discount.calculate with total price when totalWithDiscount is called', () =>{
    const { sut, discountMock } = createSutWithProducts();
    const discountMockSpy = jest.spyOn(discountMock, 'calculate');
    sut.totalWithDiscount();
    expect(discountMockSpy).toHaveBeenCalledWith(sut.total());
  })

})
