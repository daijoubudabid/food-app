import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://dabidmarma:Dabidda35@cluster0.fgv2f.mongodb.net/fast-food").then(()=> console.log("db connected"))
}