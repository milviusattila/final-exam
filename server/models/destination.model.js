import mongoose from "mongoose";

const destinationSchema = new mongoose.Schema(
  {
    name: String,
    country: String,
    img: String,
    description: String,
    estimatedCost: Number,
    bestSeason: String,
    visited: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Destination", destinationSchema);
