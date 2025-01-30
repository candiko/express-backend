import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send(`Dictionary API is running...`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
