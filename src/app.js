import express from "express";
import cors from "cors";
import wordsRoutes from "./routes/words.js";
import historyRoutes from "./routes/history.js";
import errorHandler from "./middleware/errorHandler.js";

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
  console.log(
    `Request received: ${new Date().toISOString()} - ${req.method} ${
      req.originalUrl
    }`
  );

  const error = new Error("Oh, no! Something went terribly wrong!");

  if (error) {
    next(error);
  } else {
    res.status(200).send("Dictionary API runs!");
  }
});

app.use(errorHandler);

export default app;
