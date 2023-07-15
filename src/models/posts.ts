import {Schema, model} from "mongoose"

interface IPost {
    title: string
    body: string
    tags: [string]
    user_id: string
    created_at: Date
}

const postScheme = new Schema<IPost>({
    title: {
        type: String,
        required: true,
        min: 12,
        max: 1024
    },
    body: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        default: null
    },
    user_id: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: new Date,
        required: true
    }
})

const Posts = model("posts", postScheme)
export default Posts
