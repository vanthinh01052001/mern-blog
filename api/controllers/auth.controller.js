import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
import { ErrorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(ErrorHandler(400, 'All Fields are required.'))
  }
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({
    username: username,
    email: email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.json({
      message: "Sign up is successful!",
    });
  } catch (error) {
    next(error)
  }
};
