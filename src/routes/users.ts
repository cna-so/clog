import express from "express";
import {createUser} from "../controllers/users.js";

const router = express()

router.post("/signup" , createUser)

export default router