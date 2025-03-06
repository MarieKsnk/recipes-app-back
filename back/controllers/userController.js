import User from "../models/user.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (users.length < 1) {
      return res.status(400).json({ message: "Users not found" });
    }
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const createUser = async (req, res) => {
  console.log("create a new user");
  try {
    const { first_name, last_name, email, password } = req.body;
    if ((!first_name, !last_name, !email, !password)) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const newUser = new User({
      first_name,
      last_name,
      email,
      password,
    });

    await newUser.save();
    return res.status(201).json(newUser);
  } catch (err) {
    return res.status(400).json({ message: "Internal server error" });
  }
};
