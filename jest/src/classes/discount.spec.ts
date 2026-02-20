import { Discount, FiftyPercentDiscount } from "./discount";

const createSut = (className: new() => Discount):Discount =>{
  return new className();
}

describe('Discount', () => {

  afterEach(() => jest.clearAllMocks());

  it('should have fiftyPercentDiscount', () =>{
    const sut = createSut(FiftyPercentDiscount);
    expect(sut.calculate(2)).toBe(1);

  });

});

