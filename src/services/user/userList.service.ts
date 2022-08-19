import { AppDataSource } from "../../data-source";
import { User } from "../../entities/User";
import { AppError } from "../../errors/AppError";

const userListService = async (id:string): Promise<any> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({ 
    where: { 
      id: id 
    } 
  });

  if (user === null) {
    throw new AppError("User not found!", 401);
  }

  return user;
};
export default userListService;
