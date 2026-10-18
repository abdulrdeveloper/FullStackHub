import apiError from "../../common/utils/api-error.js";
import { generateResetToken } from "../../common/utils/jwt.utils.js";
import User from "./auth.model.js";
import bcrypt from "bcryptjs";

const register = async ({ name, email, password, role }) => {
    const existing = await User.findOne({ email });
    if (existing) {
        throw apiError.conflict("Email already exists");
    }

    const { rawToken, hashedToken } = generateResetToken();

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        role: role || "customer",
        verificationToken: hashedToken,
    });


    const userObj = user.toObject();
    delete userObj.password;
    delete userObj.verificationToken;

    return userObj;
};

export { register };