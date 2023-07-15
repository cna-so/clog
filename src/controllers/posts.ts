import {Request, Response} from "express";
import Posts from "../models/posts.js";
import Users from "../models/users.js";

export const CreatePost = async (req: Request, res: Response) => {
    const {title, body, user_id, tags} = req.body;
    try {
        const isExist = await Users.findById(user_id)
        if (isExist === null) return res.status(404).json({message: "user_id doesn't exist"})
        const post = new Posts({title, body, user_id, tags})
        await post.save()
        res.status(201).json({article: post})

    } catch (err: any) {
        if (err?.kind === "ObjectId") {
            res.status(409).json({message: "user id isn't valid"})
        }
        res.status(500).json({message: err.message})
    }
}