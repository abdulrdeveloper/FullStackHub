import { register } from "./auth.service.js";
import ApiResponse from "../../common/utils/api-response.js";

const registerController = async (req, res, next) => {
    try {
        const user = await register(req.body);
        return ApiResponse.created(res, user, "User registered successfully");
    } catch (error) {
        next(error);
    }
};

export { registerController };