import mongoose from "mongoose"
import env from "dotenv"
env.config()

export const db = ()=>{
    try {
        mongoose.connect(process.env.DATABASE_STRING!).then(()=>{
            console.log("connection has been established")
        }).catch(()=>{
            console.log()
        })
    } catch (error) {
        console.log(error)
    }
}