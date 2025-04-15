import express from "express";
import { userValidation } from "../middlewares/userValidation.js";
import {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/", getUsers);

router.post("/", userValidation, createUser);

export default router;
