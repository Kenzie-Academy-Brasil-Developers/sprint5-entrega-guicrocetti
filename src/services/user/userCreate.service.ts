import { Iuser } from "../../interfaces/users";
import { User } from "../../entities/User";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/AppError";

export const userCreateService = async (userData:Iuser ) => {


  const userRepository = AppDataSource.getRepository(User)
  const users = await userRepository.find()

  const checkEmail = users.find((user) => user.email === userData.email)
  console.log("EMAIL >>>>", checkEmail)
  if (checkEmail){
    throw new AppError("Email Already Exists", 400)
  }
  // if(userData === null){
  //   throw new AppError("Missing data!", 404)
  // }
  const user = new User()
    user.name = userData.name
    user.email = userData.email
    user.password = userData.password
    user.age = userData.age
    userRepository.create(user)
    await userRepository.save(user)

    const { password, ...returnUser} = user

    return returnUser
}