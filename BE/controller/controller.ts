import { Request, Response } from "express";
import csv from "csvtojson";
import economicModel from "../model/economicModel";
import populationModel from "../model/populationModel";

export const createEconomic = async (
  req: any,
  res: Response
): Promise<Response> => {
  try {
    const file = await csv().fromFile(req.file.path);

    const data = await economicModel.create({
      economic: file,
    });
    return res.status(201).json({
      message: "Economic data created successfully",
      data,
      status: 201,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Economic data isn't created successfully",
      status: 404,
    });
  }
};

export const readEconomic = async (
  req: any,
  res: Response
): Promise<Response> => {
  try {
    const data = await economicModel.find();
    return res.status(200).json({
      message: "Economic data read successfully",
      data,
      status: 200,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Economic data isn't read successfully",
      status: 404,
    });
  }
};

export const createPopulation = async (
  req: any,
  res: Response
): Promise<Response> => {
  try {
    const file = await csv().fromFile(req.file.path);

    const data = await populationModel.create({
      population: file,
    });
    return res.status(201).json({
      message: "population data created successfully",
      data,
      status: 201,
    });
  } catch (error) {
    return res.status(404).json({
      message: "population data isn't created successfully",
      status: 404,
    });
  }
};

export const readPopulation = async (
  req: any,
  res: Response
): Promise<Response> => {
  try {
    const data = await populationModel.find();
    return res.status(200).json({
      message: "population data read successfully",
      data,
      status: 200,
    });
  } catch (error) {
    return res.status(404).json({
      message: "population data isn't read successfully",
      status: 404,
    });
  }
};
