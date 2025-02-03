import express from "express";
import cors from "cors";
import wordsRoutes from "./routes/words.js";
import historyRoutes from "./routes/history.js";

// Creating the Express app
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/words", wordsRoutes);
app.use("/api/history", historyRoutes);

// Root
app.get("/", (req, res, next) => {
  console.log(`Request received at the root: ${req.method}`);
  res.status(200).send("Dictionary API runs!");
});

export default app;
