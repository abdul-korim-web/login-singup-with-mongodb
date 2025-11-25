import { validationResult } from "express-validator"
import { User } from "../Schemas/userSchema.js"
import bcrypt from"bcrypt"

export const singupControl = async(req,res,next)=>{
    try {
        const {username,email,password}= req.body
        const validCheck = validationResult(req)
        if (!validCheck.isEmpty()) {
            return res.status(400).json({status:400,message:validCheck?.errors[0].msg})
        }
        const  isExitEmail=await User.findOne({email:email})
        if (isExitEmail) {
            return res.status(400).json({status:400,message:"This email is already exists"})
            
        }
        
        const hashPasword = await bcrypt.hash(password,10)
        const newUser=await User.create({username,email,password:hashPasword})
        res.status(200).json({status:200,message:"singUp success😍"})
        console.log("singup success😍");
    } catch (error) {
       next(error) 
    }
}