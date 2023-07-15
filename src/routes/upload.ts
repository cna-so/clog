import express from "express";

import {upload, UploadImage} from "../controllers/upload.js";

const router = express()

router.post('/img', upload.single("img"), UploadImage)
export default router