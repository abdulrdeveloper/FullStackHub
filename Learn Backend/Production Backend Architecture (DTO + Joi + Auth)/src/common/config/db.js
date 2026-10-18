import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {});
        console.log(`MongoDB connected Successfully`);
    } catch (error) {
        console.log("MongoDB connection failed", error);
        process.exit(1);
    }
};