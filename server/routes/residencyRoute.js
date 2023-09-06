import express from "express";
import { createResidency } from "../controllers/residencyController.js";
import {
  getAllResidencies,
  getResidency,
  addManyResidencies,
} from "../controllers/residencyController.js";

const router = express.Router();

// End point /register
router.post("/create", createResidency);
router.get("/allResd", getAllResidencies);
router.get("/:id", getResidency);
router.post("/addManyResidencies", addManyResidencies);

export { router as residencyRoute };
