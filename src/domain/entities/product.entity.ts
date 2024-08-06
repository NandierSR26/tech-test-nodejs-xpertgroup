
export class ProductEntity {
  constructor(
    public id: string,
    public name: string,
    public price: number,
    public amount: number,
  ) {}

  public static fromObject(object: { [key: string]: any }): ProductEntity {
    const { id, name, price, amount } = object;

    if (!id) throw "Id is required";
    if (!name) throw "name is required";
    if (!price) throw "price is required";
    if (!amount) throw "amount is required";

    return new ProductEntity(id, name, price, amount);
  }
}