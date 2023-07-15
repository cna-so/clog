import express from "express";
import path from "path";
import multer from "multer";
<<<<<<< HEAD
import {upload, UploadImage} from "../controllers/upload.js";

const router = express()
=======
import {UploadImage} from "../controllers/upload.js";

const router = express()
const upload = multer({dest: path.join("public", "uploads")})
>>>>>>> origin/master

router.post('/img', upload.single("img"), UploadImage)
export default router