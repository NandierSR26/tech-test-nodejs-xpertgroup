import { ProductEntity } from '../../entities/product.entity';
import { ProductRepository } from '../../repository/product.repository';
import { getAllProduct } from './getAll'

describe('Testing getAll-products use case', () => {

  let getAllProductUseCase: getAllProduct;
  let repository: ProductRepository;

  beforeEach(() => {
    repository = {
      getAll: jest.fn()
    } as unknown as ProductRepository;
    getAllProductUseCase = new getAllProduct(repository);
  });

  it('should return the list of products', async () => {
    const productEntity = { id: '1', name: 'Product1', price: 100, amount: 10 } as ProductEntity;

    (repository.getAll as jest.Mock).mockResolvedValue(productEntity);

    const result = await getAllProductUseCase.execute();

    console.log({result, productEntity})
    expect(result).toEqual(productEntity);
  });


})