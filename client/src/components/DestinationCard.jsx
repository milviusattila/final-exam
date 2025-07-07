import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DestinationCard = ({ destination }) => {
  const [isDeleted, setIsDeleted] = useState(false);
  const navigate = useNavigate();

  const deleteDestination = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:1988/api/destinations/delete/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete destination");
      }
      setIsDeleted(true);
    } catch (error) {
      console.error("Error deleting destination:", error);
    }
  };

  if (isDeleted) return null;

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-md mx-auto mb-6 p-2 text-center">
      <h2 className="text-xl font-bold text-gray-800 mb-2">
        {destination.name}
      </h2>
      <p className="text-sm text-gray-600 mb-1">
        <span className="font-bold">Country:</span> {destination.country}
      </p>
      <img
        src={destination.img}
        alt={destination.name}
        className="w-full h-60 object-cover b-2"
      />
      <p className="text-sm text-gray-600 mb-1">
        <span className="font-bold">Description:</span>{" "}
        {destination.description}
      </p>
      <p className="text-sm text-gray-600 mb-1">
        <span className="font-bold">Estimated Cost:</span> $
        {destination.estimatedCost}
      </p>
      <p>
        <span className="font-bold">Best Season:</span> {destination.bestSeason}
      </p>
      <p className="mt-2 text-sm text-gray-600">
        <span className="font-bold">Status:</span>{" "}
        <span
          className={
            destination.visited
              ? "text-green-800 font-bold"
              : "text-red-800 font-bold"
          }
        >
          {destination.visited ? "Visited" : "Unvisited"}
        </span>
      </p>
      <button
        onClick={() => deleteDestination(destination._id)}
        className="bg-red-500 text-white px-4 py-2 rounded mt-2 hover:bg-red-600 transition duration-300 cursor-pointer"
      >
        Delete
      </button>
    </div>
  );
};

export default DestinationCard;
