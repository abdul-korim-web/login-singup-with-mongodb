import express from "express"
import { singupControl } from "../Controls/singupControl.js"
import { singupInfoValidetion } from "../Middelewares/singupInfoValidetion.js"
export const singupRoute = express.Router()

singupRoute.post(`/`,singupInfoValidetion,singupControl)