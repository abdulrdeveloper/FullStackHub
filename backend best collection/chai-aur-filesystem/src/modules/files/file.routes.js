import { Router } from "express";
import { upload } from "../../common/middleware/multer.middleware.js";
import * as fileController from "./file.controller.js";

const router = Router();

router.post("/upload", upload.single("avatar"), fileController.uploadLocalFile);
router.post("/upload-cloud", upload.single("avatar"), fileController.uploadCloudFile);
router.get("/files", fileController.getAllFiles);
router.delete("/files/:id", fileController.deleteFile);

export default router;
