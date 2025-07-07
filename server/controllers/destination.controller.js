import Destination from "../models/destination.model.js";

///--- GET ALL DESTINATIONS ---///
export const getAllDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find({});

    if (destinations.length === 0) {
      return res.status(404).json({ message: "No destinations found." });
    }

    res.status(200).json(destinations);
  } catch (error) {
    console.error("Error fetching destinations.", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

///--- GET DESTINATION BY ID ---///
export const getDestinationById = async (req, res) => {
  const { id } = req.params.id;
  try {
    const destination = await Destination.findById(id);
    if (!destination) {
      return res.status(404).json({ message: "Destination not found." });
    }
    res.status(200).json(destination);
  } catch (error) {
    console.error(("Error fetching destination by ID.", error));
    res.status(500).json({ message: "Internal server error." });
  }
};

///--- UPDATE DESTINATION BY ID ---///
export const updateDestinationById = async (req, res) => {
  const { id } = req.params;
  try {
    const { name, country, img, description, estimatedCost, bestSeason } =
      req.body;

    if (
      !name ||
      !country ||
      !img ||
      !description ||
      !estimatedCost ||
      !bestSeason
    ) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const updatedDestination = await Destination.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedDestination) {
      return res.status(404).json({ message: "Destination not found." });
    }
    res.status(200).json({
      message: "Destination updated successfully.",
      updatedDestination,
    });
  } catch (error) {
    console.error("Error updating destination by ID.", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

///--- DELETE DESTINATION BY ID ---///
export const deleteDestinationById = async (req, res) => {
  const { id } = req.params;
  try {
    const destination = await Destination.findByIdAndDelete(id);
    if (!destination) {
      return res.status(404).json({ message: "Destination not found." });
    }
    res.status(200).json({ message: "Destination deleted successfully." });
  } catch (error) {
    console.error("Error deleting destination by ID.", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

///--- ADD NEW DESTINATION ---///
export const addDestination = async (req, res) => {
  const { name, country, img, description, estimatedCost, bestSeason } =
    req.body;
  try {
    if (
      !name ||
      !country ||
      !img ||
      !description ||
      !estimatedCost ||
      !bestSeason
    ) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newDestination = new Destination({
      name,
      country,
      img,
      description,
      estimatedCost,
      bestSeason,
      visited: false,
    });

    const destination = await Destination.create(newDestination);
    res.status(201).json({
      message: "Destination added successfully.",
      destination,
    });
  } catch (error) {
    console.error("Error adding new destination.", error);
    res.status(500).json({ message: "Internal server error." });
  }
};
