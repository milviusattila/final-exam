import express from "express";
import mongoose from "mongoose"; // Felesleges import
import dotenv from "dotenv";
import { connectDB } from "./config/connectDb.js";
import destinationRoutes from "./routes/destination.routes.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 1988;

// használsz cors-t backend-en és proxyt frontenden, az egyik elég lenne.
// ha azért csináltál proxyt hogy legyen prefix és ne kelljen kiírni a localhost-ot mindig frontend fetchelésnél akkor elfogadom.
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());
app.use("/api/destinations", destinationRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}.`);
});
