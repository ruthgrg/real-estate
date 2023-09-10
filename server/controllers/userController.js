import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";

// Simple middleware for handling exceptions inside of async express routes and passing
// them to your express error handlers.
export const createUser = asyncHandler(async (req, res) => {
  console.log("Creating a user");
  let { email } = req.body;
  // Checking for email whether we have the same user in our user collection.
  // prisma findUnique() function finds the user of the given email
  const userExists = await prisma.user.findUnique({ where: { email: email } });
  if (!userExists) {
    const user = await prisma.user.create({ data: req.body });
    res.send({
      message: "User registered successfully",
      user: user,
    });
  } else res.status(201).send({ message: "User already existed" });
});

// Function to book a visit a residency
export const bookVisit = asyncHandler(async (req, res) => {
  const { email, date } = req.body;
  const { id } = req.params;
  try {
    const alreadyBooked = await prisma.user.findUnique({
      where: { email: email },
      select: { bookedVisits: true },
    });
    if (alreadyBooked.bookedVisits.some((visit) => visit.id === id)) {
      res
        .status(400)
        .json({ message: "This residency is already booked by you" });
    } else {
      await prisma.user.update({
        where: { email: email },
        data: {
          bookedVisits: { push: { id, date } },
        },
      });
      res.send("Successfully booked");
    }
  } catch (err) {
    throw new Error(err.message);
  }
});

// Get all bookings of a user
export const getAllBooking = asyncHandler(async (req, res) => {
  console.log("I am here");
  const { id } = req.params;
  try {
    const userBookedVisits = await prisma.user.findUnique({
      where: { id },
      select: { bookedVisits: true },
    });

    // console.log(userBookedVisits);
    res.status(200).send(userBookedVisits);
  } catch (err) {
    throw new Error(err.message);
  }
});

// Canel booking of a user
export const cancelBooking = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { email } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: { email },
      select: { bookedVisits: true },
    });

    const index = user.bookedVisits.findIndex((visit) => visit.id === id);
    if (index === -1) {
      res.status(404).send("Booking not found");
    } else {
      user.bookedVisits.splice(index, 1);
      await prisma.user.update({
        where: { email },
        data: {
          bookedVisits: user.bookedVisits,
        },
      });
      res.send("Booking canceled successfully!");
    }
  } catch (err) {
    throw new Error(err.message);
  }
});

// Function to add a resd in favourite list of a user
export const addFavourite = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const { rid } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (user.favResidenciesID.includes(rid)) {
      const updatedUser = await prisma.user.update({
        where: { email },
        data: {
          favResidenciesID: {
            set: user.favResidenciesID.filter((id) => id !== rid),
          },
        },
      });
      res.status(200).send({
        message: "Removed from the favourites list",
        user: updatedUser,
      });
    } else {
      const updatedUser = await prisma.user.update({
        where: { email },
        data: {
          favResidenciesID: {
            push: rid,
          },
        },
      });
      res.status(200).send({
        message: "Successfully added to the favourite",
        user: updatedUser,
      });
    }
  } catch (err) {
    throw new Error(err.message);
  }
});

// Function to get all favourites list of a user
export const getAllFavourites = asyncHandler(async (req, res) => {
  const { email } = req.body;
  try {
    const favResd = await prisma.user.findUnique({
      where: { email },
      select: { favResidenciesID: true },
    });
    res.status(200).send({
      favResd,
    });
  } catch (err) {
    console.log(err.message);
  }
});

export const getAllUser = asyncHandler(async (req, res) => {
  try {
    const allUsers = await prisma.user.findMany();
    res.status(200).send(allUsers);
  } catch (error) {
    console.log(error.message);
  }
});
