import { ProductModel } from "../../data/mongo/models/Product";
import { ProductDatasource } from "../../domain/datasources/product.datasource";
import { CreateProductDto } from "../../domain/dtos/products/create-product.dto";
import { ProductEntity } from "../../domain/entities/product.entity";

export class ProductDatasourceImpl implements ProductDatasource {
  async getAll(): Promise<ProductEntity[]> {
    const products = await ProductModel.find();
    return products.map((product) => ProductEntity.fromObject(product));
  }
  async getOne(id: string): Promise<ProductEntity> {
    const product = await ProductModel.findById(id);

    if (!product) {
      throw ("Product not found");
    }
    return ProductEntity.fromObject(product);
  }
  async create(createProductDto: CreateProductDto): Promise<ProductEntity> {
    const product = await ProductModel.create(createProductDto);
    return ProductEntity.fromObject(product);
  }
  async update( id: string, createProductDto: CreateProductDto): Promise<ProductEntity> {
    await this.getOne(id);

    const updatedProduct = await ProductModel.findByIdAndUpdate(id, createProductDto, {
      new: true,
    });
    return ProductEntity.fromObject(updatedProduct!);
  }
  async delete(id: string): Promise<ProductEntity> {
    const product = await this.getOne(id);

    const deletedProduct = await ProductModel.findByIdAndDelete(id);
    return ProductEntity.fromObject(product);
  }
}
