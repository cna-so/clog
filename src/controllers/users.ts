import {Request, Response} from "express";
import User from "../models/users.js"
import {ComparePasswordHash, GenerateHashPassword} from "../helpers/passwordHashing.js";
import checkSigninCredentials from "../helpers/checkSigninCredentials.js";
import {UserSerializer} from "../serializer/userSerializer.js";

export const createUser = async (req: Request, res: Response) => {
    const {first_name, last_name, email, password, links, description} = req.body;
    try {
        const hashedPassword = await GenerateHashPassword(password)
        const userScheme = new User({first_name, last_name, password: hashedPassword, email, description, links})
        await userScheme.save()
        res.status(201).json({message: "user successfully created"})
    } catch (err: any) {
        res.status(500).json({message: err.message})
    }
}

export const signin = async (req: Request, res: Response) => {
    const {email, password} = req.body;
    try {
        // email and password validation
        const credentialsError = checkSigninCredentials(email, password)
        if (credentialsError !== null) {
            console.log(credentialsError)
            return res.status(409).json({message: credentialsError.error})
        }
        //     check user exist
        const user = await User.findOne({email})
        if (!user) {
            return res.status(404).json({message: "user doesn't exist"})
        }
        // compare hashPassword with raw password
        if (!await ComparePasswordHash(password, user.password)) {
            return res.status(404).json({message: "password is wrong"})
        }
        // return user if everything is right
        res.status(200).json({user: UserSerializer(user)})
    } catch (err: any) {
        res.status(500).json({message: err.message})
    }
}