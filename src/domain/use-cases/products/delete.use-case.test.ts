import { ProductEntity } from '../../entities/product.entity';
import { ProductRepository } from '../../repository/product.repository';
import { DeleteProduct } from './delete'

describe('Testing delete-product use case', () => {

  let deleteProductUseCase: DeleteProduct;
  let repository: ProductRepository;

  beforeEach(() => {
    repository = {
      delete: jest.fn()
    } as unknown as ProductRepository;
    deleteProductUseCase = new DeleteProduct(repository);
  });

  const productTest = {
    name: 'Product test',
    price: 23999,
    amount: 23
  }

  it('should call repository.delete with correct parameters', async () => {
    const id = '66b24fd3dd020e225da1ebb3';
    const productEntity = { id: '1', name: 'Product1', price: 100, amount: 10 } as ProductEntity;

    (repository.delete as jest.Mock).mockResolvedValue(productEntity);

    await deleteProductUseCase.execute(id);

    expect(repository.delete).toHaveBeenCalledWith(id);
  });

  it('should return the created product entity', async () => {
    const id = '66b24fd3dd020e225da1ebb3';
    const productEntity = { id: '1', name: 'Product1', price: 100, amount: 10 } as ProductEntity;

    (repository.delete as jest.Mock).mockResolvedValue(productEntity);

    const result = await deleteProductUseCase.execute(id);

    expect(result).toEqual(productEntity);
  });


})