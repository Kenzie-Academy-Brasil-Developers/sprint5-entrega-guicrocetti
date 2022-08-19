import { Request, Response } from "express";
import { userCreateService } from "../services/user/userCreate.service";
import userDeleteService from "../services/user/userDelete.service";
import userListService from "../services/user/userList.service";
import userListAllService from "../services/user/userListAll.service";
import userUpdateService from "../services/user/userUpdate.service";

export default class userController {
  static async create(req: Request, res: Response) {
    const userData = req.body;
    const result = await userCreateService(userData);
    return res.status(201).json(result);
  }
  static async listAll(req: Request, res: Response) {
    const result = await userListAllService();
    return res.status(200).json(result);
  }
  static async list(req: Request, res: Response) {
    const id = req.params.id;
    const result = await userListService(id);
    return res.status(200).json(result);
  }
  static async edit(req: Request, res: Response) {
    const id = req.params.id;
    const userData = req.body;
    const result = await userUpdateService(id, userData);

    return res.status(200).json(result);
  }
  static async delete(req: Request, res: Response) {
    const id = req.params.id;
    const result = await userDeleteService(id);
    return res.status(200).json(result);
  }
}
