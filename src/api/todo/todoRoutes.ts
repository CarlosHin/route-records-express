import express, { Request, Response } from "express";
import { Todo } from "./todoModel";
import { todoController } from "./todoController";
const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const todo = await todoController.getAll();
    return res.status(200).send(todo);
  } catch (error) {
    if (error instanceof Error) return res.status(500).send(error.message);
    return res.status(500).send("Unknown error");
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const { title, description } = req.body;
    await todoController.create({ title, description });
    return res.status(200).send("TODO created");
  } catch (error) {
    if (error instanceof Error) return res.status(500).send(error.message);
    return res.status(500).send("Unknown error");
  }
});

export { router as todoRouter };
