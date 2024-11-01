import { Router } from "express";
import {
  createEconomic,
  createPopulation,
  readEconomic,
  readPopulation,
} from "../controller/controller";
import { upload } from "../utils/multer";

const router: any = Router();

router.route("/create-economy").post(upload, createEconomic);
router.route("/read-economy").get(readEconomic);

router.route("/create-population").post(upload, createPopulation);
router.route("/read-population").get(readPopulation);

export default router;
