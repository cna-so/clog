import {Request, Response} from "express";
import User from "../models/users.js"
import {GenerateHashPassword} from "../helpers/passwordHashing.js";

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