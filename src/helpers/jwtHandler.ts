import jwt from "jsonwebtoken"

import {IUser} from "../models/users.js";


export const GenerateJWTToken = (user: IUser): string => {
    return jwt.sign({
        email: user.email,
        roll: user.roll,
        exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 7)
    }, process.env.SECRET ? process.env.SECRET : "")

}