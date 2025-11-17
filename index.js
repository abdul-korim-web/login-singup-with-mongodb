import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import { singupRoute } from "./src/Routes/singupRoute.js"

// app initialization 
const app = express()


// middeleware 
app.use(express.json())
dotenv.config()


// mongodb   database connection with mongoose 
mongoose.connect(process.env.MONGODB_URL)
.then(()=>console.log(`database connection success`))
.catch((err)=>console.log(err?.message || err))

//  routes
app.use("/singup",singupRoute)




//  error handeler
const errorHandeler= (err,req,res,next)=>{
    console.log(err?.message || err);
    res.status(400).json({status:400,message:"This is a server site error.Please Contact to Developer "})
    next(err?.message || err)
}
app.use(errorHandeler)

// server listen
const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`);
})