import { Document, model, Schema } from "mongoose";

interface iProps {
  education: [];
}

interface iPropsData extends iProps, Document {}

const educationModel = new Schema<iPropsData>(
  {
    education: {
      type: [],
    },
  },
  { timestamps: true }
);

export default model<iPropsData>("education", educationModel);
