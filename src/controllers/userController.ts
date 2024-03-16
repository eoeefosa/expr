import { Request, Response } from "express";
import { validationResult } from "express-validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User, { IUser } from "../models/User";

export const register = async (req: Request, res: Response) => {
  // Validate input data
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // const { username, email, password, confirmPassword } = req.body;
  // if (password != confirmPassword) {
  //   return res.status(400).json({ error: "Password do not match" });
  // }
  // also check if username exist and return username taken

  // Check if user already exists
  const { email, password, name } = req.body;
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ error: "User already exist" });
  }
  // Hash password
  const hashPassword = await bcrypt.hash(password, 10);

  // Create New user
  const newUser = new User({
    name,
    email,
    password: hashPassword,
    role: "user",
  });
  await newUser.save();
  return res.status(201).json({ message: "User registered successfully" });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    res.status(400).json({ error: "Invalid credentials" });
  }

  const isPasswordValid = await bcrypt.compare(password, user!.password);

  if (!isPasswordValid) {
    res.status(400).json({ error: "Invalid credentials" });
  }

  const jwttoken = jwt.sign(
    { userId: user!._id, role: user!.role },
    "Secret key",
    { expiresIn: "1h" }
  );

  res.json({ jwttoken });
};

export const person = async (req: Request, res: Response) => {
  res.json({ data: "efosa is a person" });
};
