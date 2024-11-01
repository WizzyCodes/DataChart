import express, { Application } from "express";

export const serverApp = (): Application => {
  const app: Application = express();
  return app;
};
