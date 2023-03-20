import express from "express";
import mongoose from "mongoose";
import { json } from "body-parser";
import dotenv from "dotenv";
import { userRouter } from "./api/users/userRoutes";
import { loginRouter } from "./api/login/loginRoutes";
import { routesRouter } from "./api/routes/routesRoutes";
import { isLogged } from "./middlewares/isLogged";

dotenv.config();
const app = express();
app.use(json());
app.use("/api/users", userRouter);
app.use("/api/login", loginRouter);
app.use("/api/private/routes",isLogged, routesRouter);


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
