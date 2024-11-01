import { connect } from "mongoose";
import env from "dotenv";
env.config();

export const dbConfig = async () => {
  await connect(process.env.DB as string).then(() => {
    console.log("connected 🚀🚀❤️❤️✉️🎮");
  });
};
