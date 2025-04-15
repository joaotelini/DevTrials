import User from "../models/User.js";
import bycrypt from "bcrypt";

async function getUsers(req, res) {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users" });
  }
}

async function createUser(req, res) {
  try {
    const { fullName, email, password, cpf } = req.body;

    const hashPass = await bycrypt.hash(password, 10);

    const newUser = new User({
      fullName,
      email,
      password: hashPass,
      cpf,
    });

    await newUser.save();

    res.status(201).json({
      message: "User Created",
      newUser,
    });
  } catch (error) {
    res.status(500).json({ message: "Error creating user" });
  }
}

function getUserById(req, res) {}

function updateUser(req, res) {}

function deleteUser(req, res) {}

export { getUsers, createUser, getUserById, updateUser, deleteUser };
