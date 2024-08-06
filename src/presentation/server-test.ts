import { envs } from "../config/envs";
import { AppRouter } from "./router";
import { Server } from "./server";


export const testServer = new Server({
  port: envs.PORT,
  routes: AppRouter.routes,
})