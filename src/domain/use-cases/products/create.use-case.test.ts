import { CreateProductDto } from '../../dtos/products/create-product.dto'
import { ProductEntity } from '../../entities/product.entity';
import { ProductRepository } from '../../repository/product.repository';
import { createProduct } from './create'

describe('Testing create-product use case', () => {

  let createProductUseCase: createProduct;
  let repository: ProductRepository;

  beforeEach(() => {
    repository = {
      create: jest.fn()
    } as unknown as ProductRepository;
    createProductUseCase = new createProduct(repository);
  });

  const productTest = {
    name: 'Product test',
    price: 23999,
    amount: 23
  }

  it('should call repository.create with correct parameters', async () => {
    const [, createProductDto] = CreateProductDto.create(productTest);
    const productEntity = { id: '1', name: 'Product1', price: 100, amount: 10 } as ProductEntity;

    (repository.create as jest.Mock).mockResolvedValue(productEntity);

    await createProductUseCase.execute(createProductDto!);

    expect(repository.create).toHaveBeenCalledWith(createProductDto);
  });

  it('should return the created product entity', async () => {
    const [, createProductDto] = CreateProductDto.create(productTest);
    const productEntity = { id: '1', name: 'Product1', price: 100, amount: 10 } as ProductEntity;

    (repository.create as jest.Mock).mockResolvedValue(productEntity);

    const result = await createProductUseCase.execute(createProductDto!);

    expect(result).toEqual(productEntity);
  });

})