import cookieParser from "cookie-parser";
import express from "express";
import ApiError from "./common/utils/api-error.js";
import errorHandler from "./common/middleware/error.middleware.js";
import fileRoutes from "./modules/files/file.routes.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/uploads", express.static("public/uploads"));


app.get("/health", (_req, res) => {
  res.status(200).json({
    status: "ok",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});


app.use(fileRoutes);

app.all("{*path}", (req, res) => {
  throw ApiError.notFound(`Route ${req.originalUrl} not found`);
});

app.use(errorHandler);

export default app;
