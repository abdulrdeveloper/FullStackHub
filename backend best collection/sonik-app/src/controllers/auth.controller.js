import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import "dotenv/config";

async function registerUser(req, res) {
  try {
    const { username, email, password, type = "user" } = req.body;

    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ message: "Username, email and password are required" });
    }

    const isUserExist = await userModel.findOne({
      $or: [{ email }, { username }],
    });
    if (isUserExist) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = new userModel({
      username,
      email,
      password: hashedPassword,
      type,
    });
    await newUser.save();

    const token = jwt.sign(
      { id: newUser._id, type: newUser.type },
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 1000,
    });

    newUser.password = undefined;
    return res.status(201).json({
      message: "User created successfully",
      user: newUser,
    });
  } catch (error) {
    console.error("Error occurred while checking user existence:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function loginUser(req, res) {
  try {
    const { username, email, password } = req.body;

    if (!password || (!username && !email)) {
      return res.status(400).json({ message: "Username or email, and password, are required" });
    }

    const user = await userModel.findOne({
      $or: [{ username }, { email }],
    });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id, type: user.type },
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 1000,
    });

    user.password = undefined;
    return res.status(200).json({
      message: "User logged in successfully",
      user,
    });
  } catch (error) {
    console.error("Error occurred while logging in user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export { registerUser, loginUser };
