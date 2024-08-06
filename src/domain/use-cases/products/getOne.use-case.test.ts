import { ProductEntity } from '../../entities/product.entity';
import { ProductRepository } from '../../repository/product.repository';
import { getOneProduct } from './getOne'

describe('Testing getOne-products use case', () => {

  let getOneProductUseCase: getOneProduct;
  let repository: ProductRepository;

  beforeEach(() => {
    repository = {
      getOne: jest.fn()
    } as unknown as ProductRepository;
    getOneProductUseCase = new getOneProduct(repository);
  });

  it('should return product entity by id', async () => {
    const id = '66b24fd3dd020e225da1ebb3'
    const productEntity = { id: '1', name: 'Product1', price: 100, amount: 10 } as ProductEntity;

    (repository.getOne as jest.Mock).mockResolvedValue(productEntity);

    const result = await getOneProductUseCase.execute(id);

    expect(result).toEqual(productEntity);
  });


})