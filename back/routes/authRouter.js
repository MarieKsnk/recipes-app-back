import User from "../models/user.js";
import { Router } from "express";
import bcrypt from "bcryptjs";

const authRouter = Router();

authRouter.post("/register", async (req, res) => {
  const { first_name, last_name, email, telephone, password } = req.body;
  try {
    const emailVerification = await User.findOne({ email });
    if (emailVerification) {
      return res.status(409).json("Email already exist");
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await new User({
      first_name,
      last_name,
      email,
      telephone,
      password: hashedPassword,
    });
    await newUser.save();
    return res.status(201).json(`Welcome ${first_name}`);
  } catch (err) {
    return res.status(400).json({ message: "internal server error" });
  }
});

export default authRouter;
