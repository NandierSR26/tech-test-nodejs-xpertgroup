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
});
