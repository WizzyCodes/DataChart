import { Router } from "express";
import {
  createCrime,
  createDevelopment,
  createEconomic,
  createEducation,
  createEnvironment,
  createHealth,
  createImmigration,
  createPopulation,
  createTrade,
  readCrime,
  readDevelopment,
  readEconomic,
  readEducation,
  readEnvironment,
  readHealth,
  readImmigration,
  readPopulation,
  readTrade,
} from "../controller/controller";
import { upload } from "../utils/multer";

const router: any = Router();

router.route("/create-economy").post(upload, createEconomic);
router.route("/read-economy").get(readEconomic);

router.route("/create-population").post(upload, createPopulation);
router.route("/read-population").get(readPopulation);

router.route("/create-trade").post(upload, createTrade);
router.route("/read-trade").get(readTrade);

router.route("/create-immigration").post(upload, createImmigration);
router.route("/read-immigration").get(readImmigration);

router.route("/create-health").post(upload, createHealth);
router.route("/read-health").get(readHealth);

router.route("/create-environment").post(upload, createEnvironment);
router.route("/read-environment").get(readEnvironment);

router.route("/create-education").post(upload, createEducation);
router.route("/read-education").get(readEducation);

router.route("/create-development").post(upload, createDevelopment);
router.route("/read-development").get(readDevelopment);

router.route("/create-crime").post(upload, createCrime);
router.route("/read-crime").get(readCrime);

export default router;
