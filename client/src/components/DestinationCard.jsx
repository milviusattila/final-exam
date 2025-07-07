import React from "react";

const DestinationCard = ({ destination }) => {
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
    </div>
  );
};

export default DestinationCard;
