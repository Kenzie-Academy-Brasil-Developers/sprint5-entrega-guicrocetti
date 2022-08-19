import { AppDataSource } from "../../data-source";
import { User } from "../../entities/User";
import { Iuser } from "../../interfaces/users";

const userListAllService = async () => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();

 const result = users.map((user:any) => {
    const {password, ...resultUser} = user
    return resultUser
  })

  return result;
};

export default userListAllService;
