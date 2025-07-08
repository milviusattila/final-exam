import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"; // useNavigate felesleges

const DestinationPage = () => {
  const [destination, setDestination] = useState(null);
  // const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // nem használod nehol
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
      /* finally{
        setLoading(false)
      } */
    };
    fetchDestination();
  }, [id]);

  if (!destination) {
    return <div>Loading...</div>;
  }

  // if (loading) return <div>Loading...</div>;
  // if (!destination) return <div>Destination not found</div>;

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
