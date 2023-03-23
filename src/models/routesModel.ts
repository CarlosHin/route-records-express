import mongoose, { ObjectId } from "mongoose";

export interface IRoute {
  name:string;
  description?:string;
  start_point?:string;
  end_point?:string;
  image?:string;
  starting_elevation?:number;
  high_point?:number;
  difficulty?: number;
  created_at:Date;
  _user_id: ObjectId;
  distance:number
  aprox_time?:number;
}

interface routeModelInterface extends mongoose.Model<RouteDoc> {
  build(attr: IRoute): RouteDoc;
}

interface RouteDoc extends mongoose.Document {
  name:string;
  description:string;
  start_point:string;
  end_point:string;
  image:string;
  starting_elevation:number;
  high_point:number;
  difficulty: number;
  created_at:Date;
  _user_id: ObjectId;
  distance:number
  aprox_time:number;
}

const routeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  start_point: {
    type: String,
    required: false,
  },
  end_point: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
  starting_elevation: {
    type: String,
    required: false,
  },
  high_point: {
    type: String,
    required: false,
  },
  created_at: {
    type: Date,
    required: true,
  },
  _user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  distance: {
    type: Number,
    required: true,
  },
  aprox_time: {
    type: String,
    required: false,
  },
  difficulty: {
    type: Number,
    required: false,
  },
});

routeSchema.statics.build = (attr: IRoute) => {
  return new Route(attr);
};

const Route = mongoose.model<RouteDoc, routeModelInterface>(
  "Route",
  routeSchema,
  "routes"
);

export { Route };
