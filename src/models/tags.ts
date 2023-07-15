import {Schema, model} from "mongoose";

interface ITag {
    title: string
    entries: [string]
}

const tagSchema = new Schema<ITag>({
    title: {
        type: String,
        required: true
    },
    entries: {
        type: [String],
        required: true,
        default: null,
    }
})

const Tags = model("tags", tagSchema)
export default Tags