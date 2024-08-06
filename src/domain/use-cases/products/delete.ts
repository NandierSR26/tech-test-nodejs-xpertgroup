import { ProductEntity } from '../../entities/product.entity';
import { ProductRepository } from '../../repository/product.repository';


export interface DeleteProductUseCase {
  execute( id: string ): Promise<ProductEntity>
}

export class DeleteProduct implements DeleteProductUseCase {

  constructor(
    private readonly repository: ProductRepository
  ) {}

  execute( id: string ): Promise<ProductEntity> {
    return this.repository.delete(id);
  }

}