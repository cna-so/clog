import {IUser} from "../models/users.js";

export const UserSerializer = (user: IUser) => {
    return {
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        links: user.links,
        description: user.description,
        roll: user.roll
    }
}
