import express from "express";
import path from "path";
import multer from "multer";
import {upload, UploadImage} from "../controllers/upload.js";

const router = express()

router.post('/img', upload.single("img"), UploadImage)
export default router