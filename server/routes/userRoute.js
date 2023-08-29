import express from "express";
import {
  createUser,
  bookVisit,
  getAllBooking,
  cancelBooking,
  addFavourite,
  getAllFavourites,
} from "../controllers/userController.js";

// Simple routes to send and retrieve the data
const router = express.Router();

// End point /register
router.post("/register", createUser);
router.post("/bookVisit/:id", bookVisit);
router.get("/:id", getAllBooking);
router.post("/cancelBooking/:id", cancelBooking);
router.post("/addFavourite/:rid", addFavourite);
router.post("/getAllfav", getAllFavourites);

export { router as userRoute };
