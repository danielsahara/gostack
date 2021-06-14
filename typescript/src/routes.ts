import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response){
    const user = createUser({
        email: 'diego@rocket.com',
        password: '123456',
        techs: ['node', 'react', {title: 'java', experience: 100}]//string[]
    });

    console.log(user);
    

    return response.json({message: 'Hello'});
}