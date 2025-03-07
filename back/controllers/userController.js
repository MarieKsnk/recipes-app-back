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

export const getUserByID = async (req, res) => {
  const { id } = req.params;
  try {
    const userByID = await User.findById(id);
    return res.status(201).json(userByID);
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, email, password } = req.body;

  try {
    let userByID = await User.findById(id);
    if (!userByID) {
      return res.status(404).json({ message: "User not found" });
    }

    userByID.first_name = first_name || userByID.first_name;
    userByID.last_name = last_name || userByID.last_name;
    userByID.email = email || userByID.email;
    userByID.password = password || userByID.password;

    await userByID.save();

    return res.status(200).json({ userByID });
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
