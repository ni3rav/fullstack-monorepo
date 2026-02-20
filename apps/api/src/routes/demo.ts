import { Router } from "express";
import { getDemoData, demoMutation } from "../service/demo";

const router = Router();

router.get("/demo", (_req, res) => {
  res.json(getDemoData());
});

router.post("/demo-mutate", (req, res) => {
  const { input } = req.body;
  if (typeof input !== "string" || !input.trim()) {
    return res.status(400).json({ error: "Input is required" });
  }
  res.json(demoMutation(input));
});

export default router;
