import express from "express";
import { createUser } from "../controllers/userController.js";

// Simple routes to send and retrieve the data
const router = express.Router();

// End point /register
router.post("/register", createUser);

export { router as userRoute };
