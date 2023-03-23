import express, { Request, Response } from "express";
import { routesController } from "./routesController";
const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const routes = await routesController.getMine(res.locals.decodedToken.id);
    return res.status(200).send(routes);
  } catch (error) {
    if (error instanceof Error) return res.status(400).send(error.message);
    return res.status(400).send("Unknown error");
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const route = {
      ...req.body.route,
      created_at: new Date(),
      _user_id: res.locals.decodedToken.id,
    };
    const newRoute = await routesController.create(route);
    return res.status(200).send({ msg: "Route created", route: newRoute });
  } catch (error) {
    if (error instanceof Error) return res.status(400).send(error.message);
    return res.status(400).send("Unknown error");
  }
});

router.delete("/", async (req: Request, res: Response) => {
  try {
    const { id } = req.body;
    const newRoute = await routesController.delete(id,res.locals.decodedToken.id);
    return res.status(200).send({ msg: "Route deleted" });
  } catch (error) {
    if (error instanceof Error) return res.status(500).send(error.message);
    return res.status(400).send("Unknown error");
  }
});

export { router as routesRouter };
