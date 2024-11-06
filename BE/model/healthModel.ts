import { Document, model, Schema } from "mongoose";

interface iProps {
  health: [];
}

interface iPropsData extends iProps, Document {}

const healthModel = new Schema<iPropsData>(
  {
    health: {
      type: [],
    },
  },
  { timestamps: true }
);

export default model<iPropsData>("health", healthModel);
