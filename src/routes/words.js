import express from "express";

const router = express.Router();

router.get("/:word", (req, res) => {
  const word = req.params.word;
  res.json({ message: `Looking up details for: ${word}` });
});

router.get("/", (req, res) => {
  res.json({ message: "Words endpoint." });
});

export default router;
