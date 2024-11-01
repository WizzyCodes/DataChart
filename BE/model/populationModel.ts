import { Document, model, Schema } from "mongoose";

interface iProps {
  population: [];
}

interface iPropsData extends iProps, Document {}

const populationModel = new Schema<iPropsData>(
  {
    population: {
      type: [],
    },
  },
  { timestamps: true }
);

export default model<iPropsData>("population", populationModel);
