import express from "express";
import {CreatePost, GetArticleById, GetPostArticles} from "../controllers/posts.js";

const router = express()

router.post("/create", CreatePost)
router.get("/all", GetPostArticles)
router.get("/find/:id", GetArticleById)

export default router