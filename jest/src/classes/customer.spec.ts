import { IndividualCustomer, EnterpriseCustomer } from "./customer";
import { IndividualCustomerProtocol, EnterpriseCustomerProtocol, CustomerOrder } from "./interfaces/customer-protocol";

const createIndividualCustomer = (firstName: string, lastName: string, cpf: string):IndividualCustomerProtocol =>{
  return new IndividualCustomer(firstName, lastName, cpf);
}

const createEnterpriseCustomer = (name: string, cnpj: string):EnterpriseCustomerProtocol =>{
  return new EnterpriseCustomer(name, cnpj);
}

describe('IndividualCustomer', () => {

  afterEach(() => jest.clearAllMocks());

  it('should have first name, last name and cpf', () =>{
    const sut = createIndividualCustomer('nome', 'sobrenome', '00');
    expect(sut).toHaveProperty('firstName', 'nome');
    expect(sut).toHaveProperty('lastName', 'sobrenome');
    expect(sut).toHaveProperty('cpf', '00');
  });

  it('should have methods to get name and idn', () =>{
    const sut = createIndividualCustomer('nome', 'sobrenome', '00');
    expect(sut.getName()).toBe('nome sobrenome');
    expect(sut.getIDN()).toBe('00');

  });

});

describe('EnterpriseCustomer', () => {

  afterEach(() => jest.clearAllMocks());

  it('should have name and cnpj', () =>{
    const sut = createEnterpriseCustomer('nome', '00');
    expect(sut).toHaveProperty('name', 'nome');
    expect(sut).toHaveProperty('cnpj', '00');
  });

  it('should have methods to get name and idn', () =>{
    const sut = createEnterpriseCustomer('nome', '00');
    expect(sut.getName()).toBe('nome');
    expect(sut.getIDN()).toBe('00');

  });

});


