import User from "../models/User";
import {getRepository} from "typeorm";
import {compare, hash} from "bcryptjs";
import {sign} from "jsonwebtoken";

interface Request {
    email: string;
    password: string;
}

interface Response{
    user: User;
    token: string;
}

class AuthenticateUserService {

    public async execute({ email, password }: Request): Promise<Response> {

        const usersRepository = getRepository(User);

        const user = await usersRepository.findOne({ where : { email }});

        if (!user){
            throw new Error('Incorrect email/password combination');
        }

        //user.password - senha criptografada
        //password - senha nao criptografada
        const passwordMatched = await compare(password, user.password);

        if (!passwordMatched){
            throw new Error('Incorrect email/password combination');
        }

        //usuario autenticado

        const token = sign({  }, '17b727bc757a3283991f75b02c42a666', {
            subject: user.id,
            expiresIn: '1d',
        });

        return{
            user,
            token,
        }
    }
}

export default AuthenticateUserService;