import express from "express";
import type { Application, Request, Response } from "express";

const app: Application = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "BazaarCore API is running",
  });
});

export default app;
