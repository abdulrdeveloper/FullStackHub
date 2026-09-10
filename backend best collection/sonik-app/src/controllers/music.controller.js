import musicModel from "../models/music.model.js";
import jwt from "jsonwebtoken";
import { uploadFile } from "../services/storage.service.js";

async function createMusic(req, res) {

  try {

    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.type !== "artist") {
      return res
        .status(403)
        .json({ message: "You don't have permission to create music" });
    }

    const { title } = req.body;
    const file = req.file;

    if (!file || !title) {
      return res.status(400).json({ message: "File and title are required" });
    }

    const result = await uploadFile(file.buffer.toString("base64"));

    const music = await musicModel.create({
      uri: result.url,
      title,
      artist: decoded.id,
    });

    return res
      .status(201)
      .json({ 
        message: "Music created successfully", 
        music: {
            id: music._id,
            uri: music.uri,
            title: music.title,
            artist: music.artist,
        }
     });

  } catch (error) {
  if (error.name === "JsonWebTokenError" || error.name === "TokenExpiredError") {
    return res.status(401).json({ message: "Unauthorized" });
  }
  console.error("Create music error:", error);
  return res.status(500).json({ message: "Internal server error" });
  }
}

export { createMusic };