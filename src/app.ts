import { AppRouter } from "./presentation/router"
import { Server } from "./presentation/server"

(async() => {
  const server = new Server({
    port: 3000,
    routes: AppRouter.routes
  })

  server.start();
})()