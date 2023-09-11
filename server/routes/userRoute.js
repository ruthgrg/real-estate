import express from "express";
import {
  createUser,
  bookVisit,
  getAllBookings,
  cancelBooking,
  addFavourite,
  getAllFavourites,
  getAllUser,
} from "../controllers/userController.js";
import { deleteResidency } from "../controllers/residencyController.js";
import jwtCheck from "../config/auth0Config.js";

// Simple routes to send and retrieve the data
const router = express.Router();

// End point /register
router.post("/register", jwtCheck, createUser);
router.post("/bookVisit/:id", jwtCheck, bookVisit);
router.get("/getAllBookings", jwtCheck, getAllBookings);
router.get("/getAllUsers", getAllUser);
router.post("/cancelBooking/:id", jwtCheck, cancelBooking);
router.post("/addFavourite/:rid", jwtCheck, addFavourite);
router.post("/getAllfav", jwtCheck, getAllFavourites);

export { router as userRoute };
