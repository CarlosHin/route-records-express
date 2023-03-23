import * as express from "express";
import { json } from "body-parser";
import cors from "cors";
import { userRouter } from "../api/users/userRoutes";
import { loginRouter } from "../api/login/loginRoutes";
import { isLogged } from "../middlewares/isLogged";
import { routesRouter } from "../api/private/routes/routesRoutes";

export default async ({ app }: { app: express.Application }) => {
  app.use(json());
  app.use("/api/users", userRouter);
  app.use("/api/login", loginRouter);
  app.use("/api/private/routes", isLogged, routesRouter);
  app.use(cors());

  // ...Más middlewares

  // Devuelve la aplicación express
  return app;
};
