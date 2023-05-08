import express from "express"
import dotenv from "dotenv"
import { routes } from "./src/routes"

dotenv.config()
export const app = express()
app.use(express.json())

app.use("/tasks",routes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))