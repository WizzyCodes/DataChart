import { Document, model, Schema } from "mongoose";

interface iProps {
  development: [];
}

interface iPropsData extends iProps, Document {}

const developmentModel = new Schema<iPropsData>(
  {
    development: {
      type: [],
    },
  },
  { timestamps: true }
);

export default model<iPropsData>("development", developmentModel);
