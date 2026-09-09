import express from "express";
import "dotenv/config";
import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";
import postModel from "../models/post.model.js";

const postRoutes = express.Router();

postRoutes.post("/create", async (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findOne({
      _id: decoded.id,
    });

    if (!user) {
      return res.status(401).json({ message: "User no longer exists" });
    }

    const { title, content } = req.body;
    const newPost = new postModel({
      title,
      content,
      author: user._id,
    });
    await newPost.save();
    res.status(201).json({
      message: "Post created successfully",
      post: newPost,
    });
  } catch (error) {
    res.status(500).json({ message: "Error creating post", error });
  }
});

export default postRoutes;
