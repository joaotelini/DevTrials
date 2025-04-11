import express from "express";
import Interview from "../models/Interview.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { candidateName, questions, candidateEmail, score } = req.body;

    const newInterview = new Interview({
      candidateName,
      questions,
      candidateEmail,
      score,
      date: new Date(),
    });

    await newInterview.save();

    res.status(201).json(newInterview);
  } catch (error) {
    res.status(500).json({ message: "Error creating interview" });
  }
});

export default router;