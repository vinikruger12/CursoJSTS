describe('Primitive values', () => {
  it('should test jest assertions', () => {
    const number = 10;
    expect(number).toBe(10);
    expect(number).toEqual(10);
  })
})

describe('Objects', () => {
  it('should test jest assertions with objects', () => {
    const person = {name: "Vinicius", age: 18};
    const anotherPerson = {...person};

    expect(person).toEqual(anotherPerson);
    expect(person).toHaveProperty('age', 18);
  })
})
