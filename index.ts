import express, {Application} from "express"
import env from "dotenv"
import { db } from "./config/db"
import { MainApp } from "./MainApp"
env.config()

const port: number = parseInt(process.env.PORT!)

const app: Application = express()
MainApp(app)

const server = app.listen(process.env.PORT || port, ()=>{
    console.log("")
    db();
})

process.on("uncaughtException", (error: Error)=>{
    console.log("Shutting down due to uncaughtException Error");
    
    process.exit(1);
})

process.on("unhandledRejection", (reason: any)=>{
    console.log("Shutting down error due to unhandledRejection Error")

    server.close(()=>{
        process.exit(1)
    })
})