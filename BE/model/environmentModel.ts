import { Document, model, Schema } from "mongoose";

interface iProps {
  environment: [];
}

interface iPropsData extends iProps, Document {}

const environmentModel = new Schema<iPropsData>(
  {
    environment: {
      type: [],
    },
  },
  { timestamps: true }
);

export default model<iPropsData>("environment", environmentModel);
