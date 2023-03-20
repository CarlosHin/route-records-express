import { ObjectId } from "mongoose";
import { Route, IRoute } from "./routesModel";

export const routesController = {
  // Método para crear un nuevo todo
  async create( route : IRoute) {
    try {
      const newRoute = Route.build(route);
      await newRoute.save();
      return newRoute;
    } catch (error) {
      if (error instanceof Error)
        throw new Error("Error creating route:" + error.message);
      throw new Error("Error creating route");
    }
  },

  async getMine(userId: ObjectId) {
    try {
      const todos = await Route.find({_user_id:userId});
      return todos;
    } catch (error) {
      if (error instanceof Error)
        throw new Error("Error geting routes: " + error.message);
      throw new Error("Error geting routes");
    }
  },

  async delete(routeId: ObjectId) {
    try {
      const findByIdAndRemoveResponse = await Route.findByIdAndRemove(routeId);
      if(!findByIdAndRemoveResponse)
        throw new Error("Route not Found");
    } catch (error) {
      if (error instanceof Error)
        throw new Error("Error deleting route: " + error.message);
      throw new Error("Error deleting route");
    }
  },

  
};
