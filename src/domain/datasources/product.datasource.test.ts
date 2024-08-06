import { CreateProductDto } from "../dtos/products/create-product.dto";
import { ProductEntity } from "../entities/product.entity";
import { ProductDatasource } from './product.datasource'

describe("log.datasource.ts LogDatasource", () => {
  
  const newProduct = ProductEntity.fromObject({
    id: 'id test 1',
    name: 'name test',
    price: 20000,
    amount: 20
  })

  class MockProductDatasource implements ProductDatasource {
    async getAll(): Promise<ProductEntity[]> {
      return [newProduct]
    }
    async getOne(id: string): Promise<ProductEntity> {
      return newProduct;
    }
    async create(createProductDto: CreateProductDto): Promise<ProductEntity> {
      return newProduct;
    }
    async update(id: string, createProductDto: CreateProductDto): Promise<ProductEntity> {
      return newProduct;
    }
    async delete(id: string): Promise<ProductEntity> {
      return newProduct;
    }
  }

  test("should test the abstract class", async () => {
    const mockProductDatasource = new MockProductDatasource();

    expect(mockProductDatasource).toBeInstanceOf(MockProductDatasource);
    expect(typeof mockProductDatasource.getAll).toBe("function");
    expect(typeof mockProductDatasource.getOne).toBe("function");
    expect(typeof mockProductDatasource.create).toBe("function");
    expect(typeof mockProductDatasource.update).toBe("function");
    expect(typeof mockProductDatasource.delete).toBe("function");

    await mockProductDatasource.create(newProduct);
    const product = await mockProductDatasource.getAll();
    expect(product).toHaveLength(1);
    expect(product[0]).toBeInstanceOf(ProductEntity);
  });
});
