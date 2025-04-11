import moongose from "mongoose";

const interviewSchema = new moongose.Schema({
  candidateName: String,
  questions: [String],
  candidateEmail: String,
  score: Number,
  date: { type: Date, default: Date.now },
});

export default moongose.model("Interview", interviewSchema);
