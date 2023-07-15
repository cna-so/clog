import mongoose, {Schema} from "mongoose";

interface IUser {
    first_name: string
    last_name: string
    email: string
    roll: string
    password: string
    description: string
    links: {
        title: string
        address: string
    }[]

}

const users =
    new Schema<IUser>({
        first_name: {
            type: String,
            default: null,
        },
        last_name: {
            type: String,
            default: null,
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        roll: {
            type: String,
            default: "user",
            required: true
        },
        links: {
            type: [{
                title: String,
                address: String,
            }],
            default: null
        },
        description: String
    });
const Users = mongoose.model('users', users);
export default Users;