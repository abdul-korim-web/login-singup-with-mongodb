import express from "express"
import { loginControl } from "../Controls/loginControl.js"
import { loginInfoValidetion } from "../Middelewares/loginInfoValidetion.js"


export const loginRoute = express.Router()

loginRoute.post(`/`,loginInfoValidetion,loginControl)