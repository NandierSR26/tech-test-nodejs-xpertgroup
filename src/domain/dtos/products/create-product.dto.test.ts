import { CreateProductDto } from "./create-product.dto";

describe("Testing create-product dto", () => {
  test("should create a product successfully", () => {
    const props = { name: "Product1", price: 100, amount: 10 };
    const [error, product] = CreateProductDto.create(props);

    expect(error).toBeUndefined();
    expect(product).toBeInstanceOf(CreateProductDto);
    expect(product?.name).toBe("Product1");
    expect(product?.price).toBe(100);
    expect(product?.amount).toBe(10);
  });

  test("should return an error if name is missing", () => {
    const props = { price: 100, amount: 10 };
    const [error, product] = CreateProductDto.create(props);

    expect(error).toBe("Name Property is required");
    expect(product).toBeUndefined();
  });

  test("should return an error if price is missing", () => {
    const props = { name: "Product1", amount: 10 };
    const [error, product] = CreateProductDto.create(props);

    expect(error).toBe("Price Property is required");
    expect(product).toBeUndefined();
  });

  test("should return an error if amount is missing", () => {
    const props = { name: "Product1", price: 100 };
    const [error, product] = CreateProductDto.create(props);

    expect(error).toBe("Amount Property is required");
    expect(product).toBeUndefined();
  });
});
