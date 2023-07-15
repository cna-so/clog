import {Express, Request, Response} from "express";

import express from "express"
import dotenv from 'dotenv';

import connectToMongodb from "./middleware/connectToMongodb.js";

dotenv.config();

const app: Express = express()

const port = process.env.PORT
const dbUrl = process.env.MONGODB_URL || ""

connectToMongodb(dbUrl).then(() => {
    app.listen(port, () => {
        console.log(`Start server on port ${port}`)
    })
})
