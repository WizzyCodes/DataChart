import { Request, Response } from "express";
import csv from "csvtojson";
import economicModel from "../model/economicModel";
import populationModel from "../model/populationModel";
import crimeModel from "../model/crimeModel";
import developmentModel from "../model/developmentModel";
import educationModel from "../model/educationModel";
import environmentModel from "../model/environmentModel";
import healthModel from "../model/healthModel";
import immigrationModel from "../model/immigrationModel";
import tradeModel from "../model/tradeModel";

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

export const createTrade = async (
  req: any,
  res: Response
): Promise<Response> => {
  try {
    const file = await csv().fromFile(req.file.path);

    const data = await tradeModel.create({
      trade: file,
    });
    return res.status(201).json({
      message: "Trade data created successfully",
      data,
      status: 201,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Trade data isn't created successfully",
      status: 404,
    });
  }
};

export const readTrade = async (req: any, res: Response): Promise<Response> => {
  try {
    const data = await tradeModel.find();
    return res.status(200).json({
      message: "Trade data read successfully",
      data,
      status: 200,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Trade data isn't read successfully",
      status: 404,
    });
  }
};

export const createImmigration = async (
  req: any,
  res: Response
): Promise<Response> => {
  try {
    const file = await csv().fromFile(req.file.path);

    const data = await immigrationModel.create({
      immigration: file,
    });
    return res.status(201).json({
      message: "immigration data created successfully",
      data,
      status: 201,
    });
  } catch (error) {
    return res.status(404).json({
      message: "immigration data isn't created successfully",
      status: 404,
    });
  }
};

export const readImmigration = async (
  req: any,
  res: Response
): Promise<Response> => {
  try {
    const data = await immigrationModel.find();
    return res.status(200).json({
      message: "immigration data read successfully",
      data,
      status: 200,
    });
  } catch (error) {
    return res.status(404).json({
      message: "immigration data isn't read successfully",
      status: 404,
    });
  }
};

export const createHealth = async (
  req: any,
  res: Response
): Promise<Response> => {
  try {
    const file = await csv().fromFile(req.file.path);

    const data = await healthModel.create({
      health: file,
    });
    return res.status(201).json({
      message: "Health data created successfully",
      data,
      status: 201,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Health data isn't created successfully",
      status: 404,
    });
  }
};

export const readHealth = async (
  req: any,
  res: Response
): Promise<Response> => {
  try {
    const data = await healthModel.find();
    return res.status(200).json({
      message: "Health data read successfully",
      data,
      status: 200,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Health data isn't read successfully",
      status: 404,
    });
  }
};

export const createEnvironment = async (
  req: any,
  res: Response
): Promise<Response> => {
  try {
    const file = await csv().fromFile(req.file.path);

    const data = await environmentModel.create({
      environment: file,
    });
    return res.status(201).json({
      message: "environment data created successfully",
      data,
      status: 201,
    });
  } catch (error) {
    return res.status(404).json({
      message: "environment data isn't created successfully",
      status: 404,
    });
  }
};

export const readEnvironment = async (
  req: any,
  res: Response
): Promise<Response> => {
  try {
    const data = await environmentModel.find();
    return res.status(200).json({
      message: "Environment data read successfully",
      data,
      status: 200,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Environment data isn't read successfully",
      status: 404,
    });
  }
};
export const createEducation = async (
  req: any,
  res: Response
): Promise<Response> => {
  try {
    const file = await csv().fromFile(req.file.path);

    const data = await educationModel.create({
      education: file,
    });
    return res.status(201).json({
      message: "Education data created successfully",
      data,
      status: 201,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Education data isn't created successfully",
      status: 404,
    });
  }
};

export const readEducation = async (
  req: any,
  res: Response
): Promise<Response> => {
  try {
    const data = await educationModel.find();
    return res.status(200).json({
      message: "Education data read successfully",
      data,
      status: 200,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Education data isn't read successfully",
      status: 404,
    });
  }
};

export const createDevelopment = async (
  req: any,
  res: Response
): Promise<Response> => {
  try {
    const file = await csv().fromFile(req.file.path);

    const data = await developmentModel.create({
      development: file,
    });
    return res.status(201).json({
      message: "Develpment data created successfully",
      data,
      status: 201,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Develpment data isn't created successfully",
      status: 404,
    });
  }
};

export const readDevelopment = async (
  req: any,
  res: Response
): Promise<Response> => {
  try {
    const data = await developmentModel.find();
    return res.status(200).json({
      message: "Development data read successfully",
      data,
      status: 200,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Development data isn't read successfully",
      status: 404,
    });
  }
};
export const createCrime = async (
  req: any,
  res: Response
): Promise<Response> => {
  try {
    const file = await csv().fromFile(req.file.path);

    const data = await crimeModel.create({
      crime: file,
    });
    return res.status(201).json({
      message: "Crime data created successfully",
      data,
      status: 201,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Crime data isn't created successfully",
      status: 404,
    });
  }
};

export const readCrime = async (req: any, res: Response): Promise<Response> => {
  try {
    const data = await crimeModel.find();
    return res.status(200).json({
      message: "Crime data read successfully",
      data,
      status: 200,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Crime data isn't read successfully",
      status: 404,
    });
  }
};
