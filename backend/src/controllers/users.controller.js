import UserModel from "../models/user.model.js";
import bcrypt from "bcrypt";

/**
 * @route POST /api/v1/users
 * @access public
 * @param {userName,email,password} req
 * @description create new user
 */
export const postUser = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    if (
      !userName ||
      !email ||
      !password ||
      userName === "" ||
      email === "" ||
      password === ""
    ) {
      return res
        .status(400)
        .json({ success: false, message: "Please fill in all fields!" }); // return error message
    }
    const user = await UserModel.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "Email already exists! " }); // return error message
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({
      userName,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(201).json({
      success: true,
      message: "User created successfully 🙂",
      data: newUser,
    }); // return success message and new user data
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error?.message,
    });
  }
};
