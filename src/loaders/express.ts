import * as express from "express";
import { json } from "body-parser";
import cors from "cors";
import { userRouter } from "../api/public/users/userRoutes";
import { loginRouter } from "../api/public/login/loginRoutes";
import { isLogged } from "../middlewares/isLogged";
import { routesRouter } from "../api/private/routes/routesRoutes";

export default async ({ app }: { app: express.Application }) => {
  app.use(json());
  app.use("/api/public/users", userRouter);
  app.use("/api/public/login", loginRouter);
  app.use("/api/private/routes", isLogged, routesRouter);
  app.use(cors());
  return app;
};
