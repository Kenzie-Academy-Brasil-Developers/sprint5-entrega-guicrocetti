import { AppDataSource } from "../../data-source"
import { User } from "../../entities/User"
import { AppError } from "../../errors/AppError"

const userDeleteService = async (id:string) => {
  const userRepository = AppDataSource.getRepository(User)
  const user = await userRepository.findOne({where: {id : id}})


  if (user === null){
    throw new AppError("User Not Found", 404)
  }

  await userRepository.delete(user!.id)
  return {message: "User Deleted"}
}

export default userDeleteService