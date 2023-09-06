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

const router = express.Router();

// End point /register
router.post("/create", createResidency);
router.get("/allResd", getAllResidencies);
router.get("/:id", getResidency);
router.post("/addManyResidencies", addManyResidencies);
router.delete("/deleteResidency/:id", deleteResidency);
router.delete("/deleteAllResidencies", deleteAllResidencies);
export { router as residencyRoute };
