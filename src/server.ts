import {Express, Request, Response} from "express";

import express from "express"
import dotenv from 'dotenv';

dotenv.config();

const app : Express = express()
const port = process.env.PORT
app.listen(port, () => {
    console.log(`Start server on port ${port}`)
})