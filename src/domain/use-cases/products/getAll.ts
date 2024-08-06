import { ProductEntity } from "../../entities/product.entity";
import { ProductRepository } from "../../repository/product.repository";

export interface getAllProductsUseCase {
  execute(): Promise<ProductEntity[]>;
}

export class getAllProduct implements getAllProductsUseCase {
  constructor(private readonly repository: ProductRepository) {}

  execute(): Promise<ProductEntity[]> {
    return this.repository.getAll();
  }
}
