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
