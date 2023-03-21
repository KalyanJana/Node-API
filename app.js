import express from 'express'
import userRouter from  './routes/user.js'
import {config} from 'dotenv'

export const app=express()

config({
    path: "./data/config.env"
})

//using middle ware to feath data for post method
app.use(express.json())
// app.use(userRouter)
app.use("/users", userRouter) //this will add /users in every user path at the starting.

app.get("/", (req, res)=>{
    res.send("Nice working")
})
