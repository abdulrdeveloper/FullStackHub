import mongoose from "mongoose";

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to Database");
  } catch (error) {
    console.error("Database Connection Error:", error);
    process.exit(1);
  }
}

export default connectDB;
