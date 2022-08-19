import { Request, Response, NextFunction } from "express";
import bcryptjs from "bcryptjs"

const hashPassword = (req: Request, res: Response, next: NextFunction) => {
  if (!req.body.password){
    next()
  }
  const newPassword = bcryptjs.hashSync(req.body.password, 10)
  req.body.password = newPassword
  next()
}

export default hashPassword