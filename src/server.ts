import {Express} from "express";
import express from "express"
import dotenv from 'dotenv';
import cors from "cors"
import bodyParser from "body-parser"

import connectToMongodb from "./middleware/connectToMongodb.js";
import authRouter from "./routes/users.js"

const app: Express = express()

app.use(cors())
app.use(bodyParser.json())
dotenv.config();

app.use("/auth", authRouter)

const port = process.env.PORT
const dbUrl = process.env.MONGODB_URL || ""

connectToMongodb(dbUrl).then(() => {
    app.listen(port, () => {
        console.log(`Start server on port ${port}`)
    })
})
