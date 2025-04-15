import express from "express";
import User from "../models/User.js";
import { userValidation } from "../middlewares/userValidation.js";
import bycrypt from "bcrypt";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching users" });
  }
});

router.post("/", userValidation, async (req, res) => {
  try {
    const { fullName, email, password, cpf } = req.body;

    const hashPass = await bycrypt.hash(password, 10);

    const newUser = new User({
      fullName,
      email,
      hashPass,
      cpf,
      password: hashPass,
    });

    await newUser.save();
    res.status(201).json("User Created", newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating user" });
  }
});

export default router;
