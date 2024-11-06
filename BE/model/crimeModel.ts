import { Document, model, Schema } from "mongoose";

interface iProps {
  crime: [];
}

interface iPropsData extends iProps, Document {}

const crimeModel = new Schema<iPropsData>(
  {
    crime: {
      type: [],
    },
  },
  { timestamps: true }
);

export default model<iPropsData>("crime", crimeModel);
