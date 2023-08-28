import express from "express";
import { createUser, bookVisit } from "../controllers/userController.js";

// Simple routes to send and retrieve the data
const router = express.Router();

// End point /register
router.post("/register", createUser);
router.post("/bookvisit/:id", bookVisit);

export { router as userRoute };
