import mongoose from "mongoose";

export default async function (dbUrl : string) {
    try {
        await mongoose.connect(dbUrl)
        console.log("successfully connected to mongodb")
    }catch (err) {
        console.log("cannot connect to db Error :" , err)
    }
}