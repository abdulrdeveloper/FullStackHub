import { Router } from "express";
import * as authController from "./auth.controller.js";
import validate from "../../common/middleware/validate.middleware.js";
import RegisterDto from "./dto/register.dto.js";

const router = Router();

router.post("/register", validate(RegisterDto), authController.register);

export default router;
