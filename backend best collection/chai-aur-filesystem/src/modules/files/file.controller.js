import fs from "fs";
import path from "path";
import ApiError from "../../common/utils/api-error.js";
import imagekit from "../../common/config/imagekit.js";
import { File } from "../../common/models/file.model.js";

export const uploadLocalFile = async (req, res, next) => {
  try {
    if (!req.file) {
      throw ApiError.badRequest("No file uploaded. Please send a file with field name 'avatar'.");
    }

    const host = req.get("host");
    const protocol = req.protocol;
    const fileUrl = `${protocol}://${host}/uploads/${req.file.filename}`;

    const savedFile = await File.create({
      originalName: req.file.originalname,
      filename: req.file.filename,
      url: fileUrl,
      mimetype: req.file.mimetype,
      size: `${(req.file.size / 1024).toFixed(2)} KB`,
      storageType: "local",
    });

    res.status(201).json({
      success: true,
      message: "File uploaded locally and saved to MongoDB!",
      data: savedFile,
    });
  } catch (error) {
    next(error);
  }
};

export const uploadCloudFile = async (req, res, next) => {
  try {
    if (!req.file) {
      throw ApiError.badRequest("No file uploaded. Please send a file with field name 'avatar'.");
    }

    if (!process.env.IMAGEKIT_PRIVATE_KEY || process.env.IMAGEKIT_PRIVATE_KEY.startsWith("private_xxxx")) {
      throw ApiError.badRequest("Please set your real IMAGEKIT_PRIVATE_KEY in .env file!");
    }

    const fileStream = fs.createReadStream(req.file.path);
    const response = await imagekit.files.upload({
      file: fileStream,
      fileName: req.file.filename,
      folder: "/chai-cohort-uploads",
    });

    fs.unlinkSync(req.file.path);

    const savedFile = await File.create({
      originalName: req.file.originalname,
      filename: response.name,
      url: response.url,
      mimetype: req.file.mimetype,
      size: `${(req.file.size / 1024).toFixed(2)} KB`,
      storageType: "imagekit",
      fileId: response.fileId,
    });

    res.status(201).json({
      success: true,
      message: "File uploaded to ImageKit and saved to MongoDB!",
      data: savedFile,
    });
  } catch (error) {
    if (req.file?.path && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
    next(error);
  }
};

export const getAllFiles = async (_req, res, next) => {
  try {
    const files = await File.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      total: files.length,
      data: files,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteFile = async (req, res, next) => {
  try {
    const file = await File.findById(req.params.id);
    if (!file) {
      throw ApiError.notFound("File record not found in MongoDB");
    }

    if (file.storageType === "local") {
      const localFilePath = path.join("public/uploads", file.filename);
      if (fs.existsSync(localFilePath)) {
        fs.unlinkSync(localFilePath);
      }
    } else if (file.storageType === "imagekit" && file.fileId) {
      try {
        await imagekit.files.delete(file.fileId);
      } catch (err) {
        console.warn("Could not delete from ImageKit:", err.message);
      }
    }

    await File.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "File successfully deleted from database and storage!",
    });
  } catch (error) {
    next(error);
  }
};
