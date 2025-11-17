import { validationResult } from "express-validator";

export const loginControl = (req, res, next) => {
  try {
    const infoValidetionResult = validationResult(req);
    console.log(infoValidetionResult);
    if (!infoValidetionResult.isEmpty()) {
      return res.status(400).json({ status: 400, message: infoValidetionResult?.errors[0].msg ||"unknown Error" });
    }
  } catch (error) {
    next(error)
  }
};
