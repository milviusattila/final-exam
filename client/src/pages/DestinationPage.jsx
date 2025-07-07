import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DestinationPage = () => {
  const [destination, setDestination] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchDestination = async () => {
      try {
        const response = await fetch(
          `http://localhost:1988/api/destinations/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch destination.");
        }

        const data = await response.json();
        setDestination(data);
      } catch (error) {
        console.error("Error fetching destination:", error);
      }
    };
    fetchDestination();
  }, [id]);

  if (!destination) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{destination.name}</h1>
      <p>{destination.country}</p>
      <img src={destination.img} alt={destination.name} />
      <p>{destination.description}</p>
      <p>{destination.estimatedCost}</p>
      <p>{destination.bestSeason}</p>
    </div>
  );
};

export default DestinationPage;

/* ## 6⃣️ DestinationPage & Card Updates

- Add a button to each `DestinationCard` to navigate to the `DestinationPage` showing detailed information.
- Add a button to each `DestinationCard` to **delete** the destination from the database and update the `HomePage`. */
