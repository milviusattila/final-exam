import mongoose from "mongoose";

const destinationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    country: { type: String, required: true },
    img: { type: String, required: true },
    description: { type: String, required: true },
    estimatedCost: { type: Number, required: true },
    bestSeason: { type: String, required: true },
    visited: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Destination", destinationSchema);
