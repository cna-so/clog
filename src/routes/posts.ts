import express from "express";
import {CreatePost, GetPostArticles} from "../controllers/posts.js";

const router = express()

router.post("/create", CreatePost)
router.get("/all", GetPostArticles)

export default router