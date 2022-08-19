import { AppDataSource } from "../../data-source"
import { User } from "../../entities/User"
import { AppError } from "../../errors/AppError"

const userUpdateService = async (id: string, userData: any): Promise<any> => {
  const userRepository = AppDataSource.getRepository(User)
  const user = await userRepository.findOne({where: {id : id}})

  if (user === null){
    throw new AppError("User not found", 404)
  }
await userRepository.update(user!.id, userData)
const UserData = await userRepository.findOne({where: {id : id}})
const {password, ...returnUser}: any = UserData
const returnData = {
  message: "user successfully updated",
  user: returnUser
}
console.log(">>>>>> TESTE >>>>>>>>>>",returnUser)
return returnData
}

export default userUpdateService