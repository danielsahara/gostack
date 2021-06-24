import User from "../models/User";
import {getRepository} from "typeorm";

interface Request {
    name: string;
    email: string;
    password: string;
}

class CreateUserService {

    public async execute({ name, email, password }: Request): Promise<User> {
        const usersRepository = getRepository(User);

        const checkUserExist = await usersRepository.findOne({
            where: {email},
        })

        if(checkUserExist) {
            throw new Error('Email addres already used');
        }

        const user = usersRepository.create({
            name,
            email,
            password,
        })

        await usersRepository.save(user);

        return user;
    }
}

export default CreateUserService;