import Server  from "./server"
import { routes } from "./src/routes"

const server = new Server()
server.listen()
server.app.use("/tasks",routes)


