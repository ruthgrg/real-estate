import express from "express";
import { createResidency } from "../controllers/residencyController.js";
import {
  getAllResidencies,
  getResidency,
} from "../controllers/residencyController.js";

const router = express.Router();

// End point /register
router.post("/create", createResidency);
router.get("/allResd", getAllResidencies);
router.get("/:id", getResidency);

export { router as residencyRoute };
