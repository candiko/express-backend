import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import wordRoutes from "./src/routes/words.js";
import historyRoutes from "./src/routes/history.js";

// Loading environment variables
dotenv.config();

// Let's get the party started
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/words", wordRoutes);
app.use("/api/history", historyRoutes);

// Root Route
app.get("/", (req, res) => {
  res.send(`Dictionary API is running...`);
});

// It listens...
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
