import { body } from "express-validator";

export const loginInfoValidetion =[
    body(`email`)
    .notEmpty().withMessage(`Email is required`)
    .isEmail().withMessage("Email is not valid"),
    body(`password`)
    .notEmpty().withMessage("Password is required")
    .isString().withMessage("Password must be a string")
]