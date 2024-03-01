import express, { Application, Response, Request, NextFunction } from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import logger from "morgan";
import authRoutes from "./routes/auth";

interface AppError extends Error {
  status: number;
  message: string;
}

const app: Application = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use('/api/users',authRoutes )

app.use((req: Request, res: Response, next: NextFunction): void => {
  res.status(404).json({ message: "Not found." });
});

app.use(
  (err: AppError, req: Request, res: Response, next: NextFunction): void => {
    res.status(500).json({
      message: err.message,
    });
  }
);

export default app;
