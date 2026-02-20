import { Product } from "./product";

const createSut = (name: string, price:number) =>{
  return new Product(name, price);
}

describe('Product', () => {

  afterEach(() => jest.clearAllMocks());

  it('should have properties name and price', () =>{
    const sut = createSut('produto', 100);
    expect(sut).toHaveProperty('name', 'produto');
    expect(sut).toHaveProperty('price', 100);
  });

});

