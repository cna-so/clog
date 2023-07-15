import express from "express";
import {CreatePost} from "../controllers/posts.js";

const router = express()

router.post("/create", CreatePost)

export default router