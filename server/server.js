import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { connectDB } from "./config/connectDb.js";
import destinationRoutes from "./routes/destination.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 1988;

app.use(express.json());
app.use("/api/destinations", destinationRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}.`);
});
