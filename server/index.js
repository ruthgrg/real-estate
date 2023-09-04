import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { userRoute } from "./routes/userRoute.js";
import { residencyRoute } from "./routes/residencyRoute.js";

// Initialize/configure dotenv file so that it can listen to our env file
dotenv.config();

const app = express();

// Initializing port (8000) from the env file and setting 3000 as a fallback port if 8000 somehow fails
const PORT = process.env.PORT || 3000;
// console.log("PORT", PORT);

// One time setup to start server

/**
 * The express. json() function is a middleware function used in Express.
 * js applications to parse incoming JSON data from HTTP requests, a standard
 * format for data transmission in web servers.
 */
app.use(express.json());

/**
 * Cookie Parser is a middleware of Node JS used to get cookie data
 */
app.use(cookieParser());

/**
 * As said, it enables CORS (cross-origin resource sharing). In order for your
 * server to be accessible by other origins (domains).
 * */
app.use(cors());

// start server by listening on port 8000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Start point /api/user
app.use("/api/user", userRoute);

// Start point /api/residency
app.use("/api/residency", residencyRoute);

// // Start point
// app.use("/api/getAllResidencies", residencyRoute);

// // Start point
// app.use("/api/getResidency", residencyRoute);

// // Start point
// app.use("/api/getAllBooking", userRoute);
