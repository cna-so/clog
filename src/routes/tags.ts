import express from "express";
import {CreateTag} from "../controllers/tags.js";

const router = express()

router.post("/create", CreateTag)

export default router