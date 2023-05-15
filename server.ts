import dotenv from "dotenv"
import express from 'express';
dotenv.config()
export default class Server {
    app
    port
    constructor(){
        this.app = express()
        this.port= process.env.PORT

    }
    middleware(){
        this.app.use(express.json())
        this.app.use(express.static("public"))
    }
    listen(){
        this.app.listen(this.port, ()=>{
            console.log("Server is running!")
        })
    }
}

