import { Document, model, Schema } from "mongoose";

interface iProps {
  immigration: [];
}

interface iPropsData extends iProps, Document {}

const immigrationModel = new Schema<iPropsData>(
  {
    immigration: {
      type: [],
    },
  },
  { timestamps: true }
);

export default model<iPropsData>("immigration", immigrationModel);
