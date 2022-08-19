import { Request, Response, NextFunction } from "express"
import { AppError } from "../errors/AppError"

const handleEmpty = (req: Request, res: Response, next: NextFunction) => {

  if(Object.keys(req.body).length === 0){
    throw new AppError("Campos Inválidos", 400)
  }
  next()
}

export default handleEmpty