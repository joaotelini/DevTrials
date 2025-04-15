import express from "express";
import Interview from "../models/Interview.js";
import User from "../models/User.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, questions, answers, theme, feedback, score } = req.body;

    if (!name || !questions || !answers || !theme || !feedback || !score) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newUser = new User({
      fullName: name,
    });

    await newUser.save();

    const questionsAnswer = questions.map((q, index) => ({
      question: q,
      answer: answers[index],
    }));

    const newInterview = new Interview({
      userId: newUser._id,
      questions: questionsAnswer,
      theme,
      feedback,
      score,
      date: new Date(),
    });

    await newInterview.save();

    res.status(201).json("Interview Created", newInterview);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating interview" });
  }
});

router.get("/", async (req, res) => {
  try {
    const interviews = await Interview.find().populate("userId", "fullName");
    res.status(200).json(interviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching interviews" });
  }
});

export default router;
