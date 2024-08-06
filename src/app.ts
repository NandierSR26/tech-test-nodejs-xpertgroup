import { MongoDatabase } from "./data/mongo/init"
import { AppRouter } from "./presentation/router"
import { Server } from "./presentation/server"

(async() => {
  const server = new Server({
    port: 3000,
    routes: AppRouter.routes
  })

  await MongoDatabase.connect({
    dbName: '',
    mongoUrl: ''
  })

  server.start();
})()