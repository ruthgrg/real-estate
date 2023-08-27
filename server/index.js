import { Express } from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

// Initialize/configure dotenv file so that it can listen to our env file
dotenv.config();

const app = Express();

// Initializing port (8000) from the env file and setting 3000 as a fallback port if 8000 somehow fails
const PORT = process.env.PORT || 3000;

// One time setup to start server

/**
 * The express. json() function is a middleware function used in Express.
 * js applications to parse incoming JSON data from HTTP requests, a standard
 * format for data transmission in web servers.
 */
app.use(Express.json());

app.use(cookieParser());
app.use(cors());
