import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";
import "dotenv/config";
import bcrypt from "bcryptjs";


async function registerUser(req, res) {
  const { name, email, password } = req.body;
  
  const isUserExists = await userModel.findOne({ email });
  if (isUserExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new userModel({ name, email, password: hashedPassword });
    await newUser.save();
    
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 3600000,
    });

    newUser.password = undefined;
    res.status(201).json({
      message: "User registered successfully",
      user: newUser,
    });
  } catch (error) {
    res.status(500).json({ message: "Error registering user", error });
  }
}

export { registerUser };
