import { ProductEntity } from '../../entities/product.entity';
import { ProductRepository } from '../../repository/product.repository';
import { CreateProductDto } from './../../dtos/products/create-product.dto';


export interface CreateProductUseCase {
  execute( createProductDto: CreateProductDto ): Promise<ProductEntity>
}

export class createProduct implements CreateProductUseCase {

  constructor(
    private readonly repository: ProductRepository
  ) {}

  execute(createProductDto: CreateProductDto): Promise<ProductEntity> {
    return this.repository.create(createProductDto);
  }

}