import express from "express"
import dotenv from "dotenv"

// app initialization 
const app = express()

// middeleware 
dotenv.config()






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