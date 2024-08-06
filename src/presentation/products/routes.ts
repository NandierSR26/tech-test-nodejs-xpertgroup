import { Router } from "express";
import { ProductController } from "./controller";
import { ProductRepositoryImpl } from "../../infraestructure/repository/product.repository.impl";
import { ProductDatasourceImpl } from "../../infraestructure/datasources/product.datasource.impl";

export class ProductRoutes {
  static get routes(): Router {
    const router = Router();

    const datasource = new ProductDatasourceImpl();
    const productRepository = new ProductRepositoryImpl(datasource);
    const productController = new ProductController(productRepository);

    router.get("/", productController.getAll);
    router.get("/:id", productController.getOne);
    router.post("/", productController.create);
    router.put("/:id", productController.update);
    router.delete("/:id", productController.delete);

    return router;
  }
}
