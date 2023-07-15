import express from "express";
import path from "path";
import multer from "multer";
import {UploadImage} from "../controllers/upload.js";

const router = express()
const upload = multer({dest: path.join("public", "uploads")})

router.post('/img', upload.single("img"), UploadImage)
export default router