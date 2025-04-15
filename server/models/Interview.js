import moongose from "mongoose";

const questionsAnswer = new moongose.Schema({
  question: String,
  answer: String,
});

const interviewSchema = new moongose.Schema({
  userId: { type: moongose.Schema.Types.ObjectId, ref: "User" },
  theme: String,
  questions: [questionsAnswer],
  feedback: String,
  score: Number,
  date: { type: Date, default: Date.now },
});

export default moongose.model("Interview", interviewSchema);
