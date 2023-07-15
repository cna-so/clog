import {Request, Response} from "express";

export const UploadImage = async (req: Request, res: Response) => {
    try {
        res.status(201).json({"image_url": req.file?.path})
    } catch (err: any) {
        res.status(500).json(err.message)
    }
}