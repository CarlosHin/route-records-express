import * as express from "express";
import expressLoader from "./express";
import mongoose from "mongoose";
import config from "../config";

export default async ({ expressApp }: { expressApp: express.Application }) => {
  mongoose.connect(
    config.databaseURL,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    },
    () => {
      console.log("connected to database");
    }
  );

  await expressLoader({ app: expressApp });
  console.log("Express Initialized");
};
