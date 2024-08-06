import { envs } from "./config/envs"
import { MongoDatabase } from "./data/mongo/init"
import { AppRouter } from "./presentation/router"
import { Server } from "./presentation/server"

(async() => {
  const server = new Server({
    port: 3000,
    routes: AppRouter.routes
  })

  await MongoDatabase.connect({
    dbName: envs.MONGO_DB_NAME,
    mongoUrl: envs.MONGO_URL
  })

  server.start();
})()