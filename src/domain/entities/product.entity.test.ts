import { ProductEntity } from './product.entity';

describe("Product entity", () => {
  const dataObj = {
    id: 'id test',
    name: "test-name",
    price: 20000,
    amount: 20,
  };

  test("should create a ProductEntity instance from object", () => {
    const product = ProductEntity.fromObject(dataObj);

    expect(product).toBeInstanceOf(ProductEntity);
    expect(product.id).toBe(dataObj.id);
    expect(product.name).toBe(dataObj.name);
    expect(product.price).toBe(dataObj.price);
    expect(product.amount).toBe(dataObj.amount);
  });

  test('should throw an error if id is missing', () => {
    const obj = { name: 'Product1', price: 100, amount: 10 };

    expect(() => ProductEntity.fromObject(obj)).toThrow('Id is required');
  });

  test('should throw an error if name is missing', () => {
    const obj = { id: '1', price: 100, amount: 10 };

    expect(() => ProductEntity.fromObject(obj)).toThrow('name is required');
  });

  test('should throw an error if price is missing', () => {
    const obj = { id: '1', name: 'Product1', amount: 10 };

    expect(() => ProductEntity.fromObject(obj)).toThrow('price is required');
  });

  test('should throw an error if amount is missing', () => {
    const obj = { id: '1', name: 'Product1', price: 100 };

    expect(() => ProductEntity.fromObject(obj)).toThrow('amount is required');
  });

});
