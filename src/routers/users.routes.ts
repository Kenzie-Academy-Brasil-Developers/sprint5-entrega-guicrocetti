import { Router } from "express";
import userController from "../controllers/user.controller";
import hashPassword from "../middlewares/hashPassword.middleware";
import handleEmpty from "../middlewares/hendleEmpty.middleware";
const user = userController

const userRoutes = Router()

userRoutes.post('',handleEmpty, hashPassword, user.create)
userRoutes.get('',user.listAll)
userRoutes.get('/:id',user.list)
userRoutes.patch('/:id', user.edit)
userRoutes.delete('/:id',user.delete)

export default userRoutes