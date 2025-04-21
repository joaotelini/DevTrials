import mongoose from "mongoose";

const questionsAnswer = new mongoose.Schema({
  question: String,
  answer: String,
});

const interviewSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  theme: String,
  questions: [questionsAnswer],
  feedback: String,
  score: Number,
  date: { type: Date, default: Date.now },
});

export default mongoose.model("Interview", interviewSchema);
