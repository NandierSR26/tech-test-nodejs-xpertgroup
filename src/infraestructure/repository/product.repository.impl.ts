import { ProductDatasource } from "../../domain/datasources/product.datasource";
import { CreateProductDto } from "../../domain/dtos/products/create-product.dto";
import { ProductEntity } from "../../domain/entities/product.entity";
import { ProductRepository } from "../../domain/repository/product.repository";

export class ProductRepositoryImpl implements ProductRepository {
  constructor(private readonly datasource: ProductDatasource) {}

  getAll(): Promise<ProductEntity[]> {
    return this.datasource.getAll();
  }
  getOne(id: string): Promise<ProductEntity> {
    return this.datasource.getOne(id);
  }
  create(createProductDto: CreateProductDto): Promise<ProductEntity> {
    return this.datasource.create(createProductDto);
  }
  update(
    id: string,
    createProductDto: CreateProductDto
  ): Promise<ProductEntity> {
    return this.datasource.update(id, createProductDto);
  }
  delete(id: string): Promise<ProductEntity> {
    return this.datasource.delete(id);
  }
}
