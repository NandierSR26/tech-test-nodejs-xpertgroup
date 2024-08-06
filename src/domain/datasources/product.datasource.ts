import { CreateProductDto } from "../dtos/products/create-product.dto";
import { ProductEntity } from "../entities/product.entity";

export abstract class ProductDatasource {

  abstract getAll(): Promise<ProductEntity[]>;
  abstract getOne( id: string ): Promise<ProductEntity>;
  abstract create( createProductDto: CreateProductDto ): Promise<ProductEntity>;
  abstract update( createProductDto: CreateProductDto ): Promise<ProductEntity>;
  abstract delete( id: string ): Promise<ProductEntity>;

}