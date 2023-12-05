import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";

export const createResidency = asyncHandler(async (req, res) => {
  console.log("req", req);
  const {
    title,
    description,
    price,
    address,
    city,
    country,
    facilities,
    image,
    userEmail,
  } = req.body.data;
  try {
    const residency = await prisma.residency.create({
      data: {
        title,
        description,
        price,
        address,
        country,
        city,
        facilities,
        image,
        owner: { connect: { email: userEmail } },
      },
    });
    console.log(residency);
    res.send({
      message: "Residency created successfully",
      residency,
    });
  } catch (err) {
    if (err.code === "P2002") {
      throw new Error("A residency with address already there");
    } else {
      throw new Error(err.message);
    }
  }
});

// Function to  get all the documents/residencies
export const getAllResidencies = asyncHandler(async (req, res) => {
  const residencies = await prisma.residency.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  res.send(residencies);
});

// Function to get one specific residency with given id
export const getResidency = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
  } catch (err) {
    throw new Error(err.message);
  }
  const residency = await prisma.residency.findUnique({
    where: { id },
  });
  res.send(residency);
});

export const deleteResidency = asyncHandler(async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const deletedResidency = await prisma.residency.delete({
      where: { id },
    });
    res.status(200).send(deletedResidency);
  } catch (error) {
    throw new Error(error.message);
  }
});

export const addManyResidencies = asyncHandler(async (req, res) => {
  const manyResidencies = req.body;
  try {
    await prisma.residency.createMany({
      data: [...manyResidencies],
    });

    res.status(200).send("Successfully added");
  } catch (error) {
    throw new Error(error.message);
  }
});

export const deleteAllResidencies = asyncHandler(async (req, res) => {
  const { email } = req.body;
  try {
    await prisma.residency.deleteMany({
      where: { userEmail: email },
    });
    res.status(200).send("Deleted successfully");
  } catch (error) {
    throw new Error(error.message);
  }
});
