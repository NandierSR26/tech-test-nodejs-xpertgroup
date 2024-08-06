import { ProductEntity } from '../../entities/product.entity';
import { ProductRepository } from '../../repository/product.repository';
import { CreateProductDto } from './../../dtos/products/create-product.dto';


export interface UpdateProductUseCase {
  execute( id: string, createProductDto: CreateProductDto ): Promise<ProductEntity>
}

export class updateProduct implements UpdateProductUseCase {

  constructor(
    private readonly repository: ProductRepository
  ) {}

  execute( id: string, createProductDto: CreateProductDto): Promise<ProductEntity> {
    return this.repository.update(id, createProductDto);
  }

}