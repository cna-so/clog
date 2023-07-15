import {Request, Response} from "express";
import Tags from "../models/tags.js";

export const CreateTag = async (req: Request, res: Response) => {
    const {title, entries} = req.body;
    try {
        const tag = new Tags({title, entries})
        await tag.save()
        res.status(201).json({tag})
    } catch (err: any) {
        res.status(500).json({message: err.message})
    }
}