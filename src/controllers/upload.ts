import {Request, Response} from "express";
import multer from "multer";
import path from "path";


export const UploadImage = async (req: Request, res: Response) => {
    try {
        res.status(201).json({"image_url": req.file?.path})
    } catch (err: any) {
        res.status(500).json(err.message)
    }
}
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join("public", "uploads"))
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '.jpg') //Appending .jpg
    }
})

export const upload = multer({storage: storage});
