import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://wuttiphong:05042543@cluster0.s2zukgs.mongodb.net/food-del').then(()=>console.log("DB Connected")
    )
}