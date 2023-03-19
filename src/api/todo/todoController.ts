import { Todo } from "./todoModel";

export const todoController = {
  // Método para crear un nuevo todo
  async create({ title, description }: { title: string; description: string }) {
    try {
      const todo = Todo.build({ title, description });
      await todo.save();
      return todo;
    } catch (error) {
      if (error instanceof Error)
        throw new Error("Error creating todo:" + error.message);
      throw new Error("Error creating todo:");
    }
  },

  async getAll() {
    try {
      const todos = await Todo.find({});
      return todos;
    } catch (error) {
      if (error instanceof Error)
        throw new Error("Error creating todo:" + error.message);
      throw new Error("Error creating todo:");
    }
  },
};
