import {Express} from "express";
import express from "express"
import dotenv from 'dotenv';
import cors from "cors"
import bodyParser from "body-parser"

import connectToMongodb from "./middleware/connectToMongodb.js";
import authRouter from "./routes/users.js"
import postRouter from "./routes/posts.js"
import uploadRouter from "./routes/upload.js"
import path from "path";


const app: Express = express()


app.use(cors())
app.use(bodyParser.json())
app.use(express.urlencoded({extended: true}))
dotenv.config();

app.use("/public" , express.static(path.join(path.dirname("./"), 'public')))
app.use("/auth", authRouter)
app.use("/post", postRouter)
app.use("/upload", uploadRouter)


const port = process.env.PORT
const dbUrl = process.env.MONGODB_URL || ""

connectToMongodb(dbUrl).then(() => {
    app.listen(port, () => {
        console.log(`Start server on port ${port}`)
    })
})
