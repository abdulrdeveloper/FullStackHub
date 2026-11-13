import fs from "node:fs";
import { unlink, open } from "node:fs/promises";
import path from "path";
import ApiError from "../../common/utils/api-error.js";
import imagekit from "../../common/config/imagekit.js";
import { File } from "../../common/models/file.model.js";

const validateFileSignature = async (filePath, mimetype) => {
  let fileHandle;
  try {
    fileHandle = await open(filePath, "r");
    const buffer = Buffer.alloc(8);
    await fileHandle.read(buffer, 0, 8, 0);

    const signatures = {
      "image/jpeg": [[0xff, 0xd8, 0xff]],
      "image/png": [[0x89, 0x50, 0x4e, 0x47]],
      "image/gif": [[0x47, 0x49, 0x46, 0x38]],
      "image/webp": [[0x52, 0x49, 0x46, 0x46]],
    };

    const expected = signatures[mimetype];
    if (!expected) return false;

    return expected.some((sig) =>
      sig.every((byte, index) => buffer[index] === byte)
    );
  } catch {
    return false;
  } finally {
    if (fileHandle) await fileHandle.close();
  }
};

export const uploadLocalFile = async (req, res, next) => {
  try {
    if (!req.file) {
      throw ApiError.badRequest("No file uploaded. Please send a file with field name 'avatar'.");
    }

    const isValid = await validateFileSignature(req.file.path, req.file.mimetype);
    if (!isValid) {
      await unlink(req.file.path).catch(() => {});
      throw ApiError.badRequest("Invalid file signature: content does not match declared type.");
    }

    const host = req.get("host");
    const protocol = req.protocol;
    const fileUrl = `${protocol}://${host}/uploads/${req.file.filename}`;

    const savedFile = await File.create({
      originalName: req.file.originalname,
      filename: req.file.filename,
      url: fileUrl,
      mimetype: req.file.mimetype,
      size: req.file.size,
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

    const isValid = await validateFileSignature(req.file.path, req.file.mimetype);
    if (!isValid) {
      await unlink(req.file.path).catch(() => {});
      throw ApiError.badRequest("Invalid file signature: content does not match declared type.");
    }

    if (!process.env.IMAGEKIT_PRIVATE_KEY || process.env.IMAGEKIT_PRIVATE_KEY.startsWith("private_xxxx")) {
      await unlink(req.file.path).catch(() => {});
      throw ApiError.badRequest("Please set your real IMAGEKIT_PRIVATE_KEY in .env file!");
    }

    const fileStream = fs.createReadStream(req.file.path);
    const response = await imagekit.files.upload({
      file: fileStream,
      fileName: req.file.filename,
      folder: "/chai-cohort-uploads",
    });

    await unlink(req.file.path).catch(() => {});

    const savedFile = await File.create({
      originalName: req.file.originalname,
      filename: response.name,
      url: response.url,
      mimetype: req.file.mimetype,
      size: req.file.size,
      storageType: "imagekit",
      fileId: response.fileId,
    });

    res.status(201).json({
      success: true,
      message: "File uploaded to ImageKit and saved to MongoDB!",
      data: savedFile,
    });
  } catch (error) {
    if (req.file?.path) {
      await unlink(req.file.path).catch(() => {});
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
      await unlink(localFilePath).catch(() => {});
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
