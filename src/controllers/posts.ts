import {Request, Response} from "express";
import Posts from "../models/posts.js";
import Users from "../models/users.js";

export const CreatePost = async (req: Request, res: Response) => {
    const {title, body, user_id, tags} = req.body;
    try {
        const isExist = await Users.findById(user_id)
        if (isExist === null) return res.status(404).json({message: "user_id doesn't exist"})
        const post = new Posts({title, body, user_id, tags})
        await post.save()
        res.status(201).json({article: post})

    } catch (err: any) {
        if (err?.kind === "ObjectId") {
            res.status(409).json({message: "user id isn't valid"})
        }
        res.status(500).json({message: err.message})
    }
}

export const GetPostArticles = async (req: Request, res: Response) => {
    const page = req.query.page

    const currentPage = page ? +page : 1
    const perPage = 10

    try {
        const posts = await Posts.aggregate([{$sort: {created_at: -1}}]).skip(currentPage * perPage - perPage).limit(perPage).exec()
        const count = await Posts.count()
        const nextPage = currentPage + 1
        const hasNextPage = nextPage <= Math.ceil(count / perPage)
        const totalPages = Math.ceil(count / perPage)
        const previousPage = currentPage <= 1 ? null : currentPage - 1
        res.status(200).json({
            next: hasNextPage ? nextPage : null,
            current_page: currentPage,
            total_pages: totalPages,
            previous_page: previousPage,
            count,
            posts
        })
    } catch (err: any) {
        res.status(500).json({message: err.message})
    }
}

export const GetArticleById = async (req: Request, res: Response) => {
    const id = req.params.id
    try {
        const searchedPost = await Posts.findById(id)
        res.status(200).json({post: searchedPost})
    } catch (err: any) {
        if (err.kind === "ObjectId") {
            res.status(409).json({message: "post_id isn't valid"})
        }
        res.status(500).json({message: err.message})
    }
}