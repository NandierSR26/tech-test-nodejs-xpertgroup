import { ProductEntity } from '../../entities/product.entity';
import { ProductRepository } from '../../repository/product.repository';


export interface GetOneProductuseCase {
  execute( id: string ): Promise<ProductEntity>
}

export class getOneProduct implements GetOneProductuseCase {

  constructor(
    private readonly repository: ProductRepository
  ) {}

  execute( id: string ): Promise<ProductEntity> {
    return this.repository.getOne(id);
  }

}