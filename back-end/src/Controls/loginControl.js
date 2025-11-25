import { validationResult } from "express-validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../Schemas/userSchema.js";
import cookieParser  from "cookie-parser"

export const loginControl = async(req, res, next) => {
  try {
    const {email,password} = req.body
    const infoValidetionResult = validationResult(req);
    if (!infoValidetionResult.isEmpty()) {
      return res.status(400).json({ status: 400, message: infoValidetionResult?.errors[0].msg ||"unknown Error" });
    }
    const isValidEmail =await User.findOne({email:email})
    
    if(!isValidEmail){
        return res.status(400).json({status:400,message:"Email Is Not Exit "})
    }
    const isValidPassword =await bcrypt.compare(password,isValidEmail.password)
    if(!isValidPassword){
         return res.status(400).json({status:400,message:" password is incorrect "})
    }
    
    const token = await jwt.sign({id:isValidEmail?._id,email:isValidEmail?.email},process.env.JWT_SECRET,{expiresIn:`1d`})
    res.cookie("login-singup-token",token,{
      httpOnly:true,
      secure:false,
      maxAge:24*60*60*1000 // 1day 
    })
    res.status(200).json({status:200,message:"Login Success😍",token})

  } catch (error) {
    next(error)
  }
};
