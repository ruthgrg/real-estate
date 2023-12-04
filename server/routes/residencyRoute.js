import express from "express";
import {
  createResidency,
  deleteResidency,
} from "../controllers/residencyController.js";
import {
  getAllResidencies,
  getResidency,
  addManyResidencies,
  deleteAllResidencies,
} from "../controllers/residencyController.js";
import jwtCheck from "../config/auth0Config.js";

const router = express.Router();

// End point /register
router.post("/create", jwtCheck, createResidency);
router.get("/allResd", getAllResidencies);
router.get("/:id", getResidency);
router.post("/addManyResidencies", addManyResidencies);
router.delete("/deleteResidency/:id", jwtCheck, deleteResidency);
router.delete("/deleteAllResidencies", deleteAllResidencies);
export { router as residencyRoute };
