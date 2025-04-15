import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  password: String,
  cpf: String,
});

const User = mongoose.model("User", userSchema);

export default User;