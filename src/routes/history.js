import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json(`Search history endpoint.`);
});

export default router;
