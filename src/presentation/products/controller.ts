import { Request, Response } from "express";
import { ProductRepository } from "../../domain/repository/product.repository";
import { getAllProduct } from "../../domain/use-cases/products/getAll";
import { getOneProduct } from "../../domain/use-cases/products/getOne";
import { createProduct } from "../../domain/use-cases/products/create";
import { updateProduct } from "../../domain/use-cases/products/update";
import { DeleteProduct } from "../../domain/use-cases/products/delete";
import { CreateProductDto } from "../../domain/dtos/products/create-product.dto";

export class ProductController {
  constructor(private readonly repository: ProductRepository) {}

  public getAll = (req: Request, res: Response) => {
    new getAllProduct(this.repository)
      .execute()
      .then((products) => res.json(products));
  };

  public getOne = (req: Request, res: Response) => {
    new getOneProduct( this.repository )
      .execute( req.params.id )
      .then((product) => res.json(product))
      .catch((error) => res.status(400).json({ error }));
  };

  public create = (req: Request, res: Response) => {
    const [ error, createProductDto ] = CreateProductDto.create(req.body);
    if(error) return res.status(400).json({ error });

    new createProduct( this.repository )
      .execute( createProductDto! )
      .then(product => res.json(product))
      .catch(error => res.status(400).json({ error }));
  };

  public update = (req: Request, res: Response) => {
    const [ error, createProductDto ] = CreateProductDto.create(req.body);
    if(error) return res.status(400).json({ error });

    new updateProduct( this.repository )
      .execute( req.params.id, createProductDto!)
      .then(product => res.json(product))
      .catch(error => res.status(400).json({ error }));

  };

  public delete = (req: Request, res: Response) => {
    new DeleteProduct( this.repository )
      .execute(req.params.id)
      .then(product => res.json(product))
      .catch(error => res.status(400).json({ error }));
  };
}
