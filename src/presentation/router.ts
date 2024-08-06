import { Router } from "express";
import { ProductRoutes } from "./products/routes";

export class AppRouter {
  static get routes(): Router {
    const router = Router();

    router.use('/api/v1/products', ProductRoutes.routes);

    return router;
  }
}
