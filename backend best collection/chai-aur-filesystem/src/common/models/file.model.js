import mongoose from "mongoose";

const fileSchema = new mongoose.Schema(
  {
    originalName: {
      type: String,
      required: true,
      trim: true,
    },
    filename: {
      type: String,
      required: true,
      trim: true,
    },
    url: {
      type: String,
      required: true,
    },
    storageType: {
      type: String,
      enum: ["local", "imagekit"],
      default: "local",
    },
    mimetype: {
      type: String,
    },
    size: {
      type: String,
    },
    fileId: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

export const File = mongoose.model("File", fileSchema);
