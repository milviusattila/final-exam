import mongoose from "mongoose";
// extra validáció és visszajelzés hiba esetén
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

/* const destinationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"], // Ha nincs name mi legyen a válasz
    },
    country: {
      type: String,
      required: true,
      // Ha van felesleges space a string előtt vagy mögött akkor azt kitörli.
       trim: true,
    },
    img: {
      type: String,
      // Mivel az img nem required ezért beállíthatunk default értéket neki ha nem kapunk img stringet a req.bodyból.
      default: "",
    },
    description: {
      type: String,
      required: true,
    },
    estimatedCost: {
      type: Number,
      required: true,
      //Extra validáció : nem lehet kisebb mint 0
       min: [0, "Estimated cost cannot be negative"]
    },
    bestSeason: {
      type: String,
      required: true,
      //Extra validáció: csak ezek közül lehet valamelyik opció
      enum : ["Spring", "Summer", "Autumn", "Winter"]
    },
    visited: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
); */

export default mongoose.model("Destination", destinationSchema);
