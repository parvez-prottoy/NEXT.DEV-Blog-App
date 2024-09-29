import express from "express";
import morgan from "morgan";
import cors from "cors";
import { notFoundHandler, errorHandler } from "./src/utils/error.js";
import connectDB from "./config/db.js";
const app = express();
// note: connect DB
connectDB.apply();
// note: used middlewares
app.use([
  morgan("dev"),
  cors(),
  express.json(),
  express.urlencoded({ extended: true }),
]);
// note: error handlers
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
