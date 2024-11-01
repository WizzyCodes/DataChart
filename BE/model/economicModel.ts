import { Document, model, Schema } from "mongoose";

interface iProps {
  economic: [];
}

interface iPropsData extends iProps, Document {}

const economicModel = new Schema<iPropsData>(
  {
    economic: {
      type: [],
    },
  },
  { timestamps: true }
);

export default model<iPropsData>("economic", economicModel);
