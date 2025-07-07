import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import DestinationCard from "../components/DestinationCard";

const HomePage = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch(
          "http://localhost:1988/api/destinations/all"
        );
        const data = await response.json();
        setDestinations(data);
      } catch (error) {
        console.error("Error fetching destinations:", error);
      }
    };
    fetchDestinations();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 pt-314">
      <h1 className="bg-blue-500 text-white text-center p-4 shadow-md w-full text-3xl font-bold">
        MY TRAVEL BUCKET LIST
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg-cols-3 gap-6 w-full max-w-4xl p-4">
        {destinations.length === 0 ? (
          <p className="text-center text-gray-500">No destinations found.</p>
        ) : (
          destinations.map((destination) => (
            <DestinationCard key={destination._id} destination={destination} />
          ))
        )}
      </div>
    </div>
  );
};

export default HomePage;

/* - Display a centered **My Travel Bucket List** title at the top.
- Show all destinations in cards, sorted by `estimatedCost`.
- In a separate section show only `visited` destinations.
- Find the cheapest unvisited destination and display it. */
