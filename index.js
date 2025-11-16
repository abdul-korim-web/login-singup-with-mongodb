import express from "express"
import dotenv from "dotenv"

// app initialization 
const app = express()

// middeleware 
dotenv.config()










// server listen
const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`);
})