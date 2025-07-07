import express from "express";
import {
  getAllDestinations,
  getDestinationById,
  updateDestinationById,
  deleteDestinationById,
  addDestination,
} from "../controllers/destination.controller.js";

const router = express.Router();

router.get("/all", getAllDestinations);
router.get("/:id", getDestinationById);
router.put("/update/:id", updateDestinationById);
router.delete("/delete/:id", deleteDestinationById);
router.post("/add", addDestination);

export default router;
