import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import interviewRoutes from "./routes/interview.js";
import userRoutes from "./routes/user.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use("/api/interviews", interviewRoutes);
app.use("/api/users", userRoutes);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});
