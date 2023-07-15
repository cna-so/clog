import express from "express";
import {createUser, signin} from "../controllers/users.js";

const router = express()

router.post("/signup" , createUser)
router.post("/signin" , signin)

export default router