import cors from "cors";
import express from "express";
import { toNodeHandler } from "better-auth/node";

import { auth } from "@/lib/auth";
import { env } from "@/lib/env";
import demoRouter from "./routes/demo";

const app = express();

app.use(
  cors({
    origin: env.CORS_ORIGIN,
    credentials: true,
  }),
);

app.all("/api/auth/{*any}", toNodeHandler(auth));
app.use(express.json());
app.use("/api", demoRouter);

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

app.listen(env.PORT, () => {
  console.log(`API running on http://localhost:${env.PORT}`);
});
