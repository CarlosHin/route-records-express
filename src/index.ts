import express from "express";
import mongoose from "mongoose";
import { json } from "body-parser";
import { todoRouter } from "./api/todo/todoRoutes";
import { userRouter } from "./api/users/userRoutes";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(json());
app.use("/api/todo", todoRouter);
app.use("/api/users", userRouter);

mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.rtfuv.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("connected to database");
  }
);

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
