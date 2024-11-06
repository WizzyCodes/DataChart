import { Document, model, Schema } from "mongoose";

interface iProps {
  trade: [];
}

interface iPropsData extends iProps, Document {}

const tradeModel = new Schema<iPropsData>(
  {
    trade: {
      type: [],
    },
  },
  { timestamps: true }
);

export default model<iPropsData>("trade", tradeModel);
