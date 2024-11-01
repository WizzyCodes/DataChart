import express, { Application } from "express";
import env from "dotenv";
import cors from "cors";
import { mainApp } from "./mainApp";
import { serverApp } from "./utils/serverApp";
import { dbConfig } from "./utils/dbConfig";
env.config();

const app: Application = serverApp();

app.use(express.json());
app.use(cors());

mainApp(app);
let server = app.listen(process.env.PORT, () => {
  console.clear();
  dbConfig();
});

process.on("uncaughtException", (err: Error) => {
  console.log("uncaughtException: ", err);
  process.exit(1);
});

process.on("unhandledRejection", (reason: any) => {
  console.log("unhandledRejection: ", reason);

  server.close(() => {
    process.exit(1);
  });
});
