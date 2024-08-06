
export class CreateProductDto {

  private constructor(
    public readonly name: string,
    public readonly price: number,
    public readonly amount: number,
  ) {}

  static create( props: {[key:string]: any} ): [string?, CreateProductDto?] {

    const { name, price, amount } = props;

    if(!name) return ['Name Property is required', undefined];
    if(!price) return ['Price Property is required', undefined];
    if(!amount) return ['Amount Property is required', undefined];

    return [undefined, new CreateProductDto(name, price, amount)];
  }

}