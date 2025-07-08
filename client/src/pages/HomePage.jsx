import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import DestinationCard from "../components/DestinationCard";

// A feladat itt annyi lett volna hogy egyszer kilistázod az összeset sortolva, aztán megmutatod külön az összeset ami visited egy filterrel,
//  aztán megmutatod melyik a legolcsóbb unvisited. Azért nem lettél kész mert túlbonyolítottad. Ha egyszerű a kérdés egyszerűen válaszold meg.

const HomePage = () => {
  // Elég lenne egy destinations state és egy loading state az egészhez
  const [destinations, setDestinations] = useState([]);
  /* const [loading, setLoading] = useState(true); */
  const [destinationsByEstimatedCost, setDestinationsByEstimatedCost] =
    useState([]);
  const [visitedDestinations, setVisitedDestinations] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [cheapestUnvisitedDestination, setCheapestUnvisitedDestination] =
    useState(null);
  const [showVisitedOnly, setShowVisitedOnly] = useState(false);

  /* SORT DESTINATIONS BY ESTIMATED COST */
  const sortDestinationsByEstimatedCost = (destinations, order = "asc") => {
    const sorted = [...destinations].sort((a, b) =>
      order === "asc"
        ? a.estimatedCost - b.estimatedCost
        : b.estimatedCost - a.estimatedCost
    );
    return sorted;
  };

  /* FETCH DESTINATIONS */
  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch(
          "http://localhost:1988/api/destinations/all"
        );
        const data = await response.json();

        const sorted = sortDestinationsByEstimatedCost(data, sortOrder);
        setDestinationsByEstimatedCost(sorted);

        const visited = sorted.filter((d) => d.visited);
        setVisitedDestinations(visited);

        const unvisited = sorted.filter((d) => !d.visited);
        if (unvisited.length > 0) {
          setCheapestUnvisitedDestination(unvisited[0]);
        }
      } catch (error) {
        console.error("Error fetching destinations:", error);
      }
    };
    fetchDestinations();
  }, [sortOrder]);

  // JAVÍTOTT VERZIÓ:

  /* useEffect(() => {
    const fetchAllDestinations = async () => {
      try {
        const res = await fetch("/api/destinations/all");

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await res.json();
        setDestinations(data);
      } catch {
        console.error("Error fetching destinations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllDestinations();
  }, []);

  const sortedDestinations = destinations.sort(
    (a, b) => a.estimatedCost - b.estimatedCost
  );
  const filterByVisited = destinations.filter(
    (destination) => destination.visited
  );
  const cheapestUnvisitedDestination = destinations
    .filter((destination) => !destination.visited)
    .sort((a, b) => a.estimatedCost - b.estimatedCost)[0];

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:1988/api/destinations/delete/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Failed to delete destination");
      }
      setDestinations((prev) => prev.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Error deleting destination", error);
    }
  }; */

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen pt-8">
      <h1 className="bg-blue-500 text-white text-center p-4 shadow-md w-full text-3xl font-bold">
        MY TRAVEL BUCKET LIST
      </h1>
      {/* SORT BY ESTIMATED COST */}
      <div className="mb-4 mt-2">
        <label htmlFor="sortOrder" className="mr-2 font-semibold">
          Sort by estimated cost:
        </label>
        <select
          name="sortOrder"
          id="sortOrder"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="cursor-pointer p-2 border border-gray-300 rounded"
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      {/* SORT BY VISITED STATUS */}
      <div className="mb-t mt-2 flex items-center gap-2">
        <input
          type="checkbox"
          id="showVisitedOnly"
          checked={showVisitedOnly}
          onChange={(e) => setShowVisitedOnly(e.target.checked)}
          className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
        />
        <label htmlFor="showVisitedOnly" className="mr-2">
          Show visited only
        </label>
      </div>
      {/* SHOW DESTINATIONS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg-cols-3 gap-6 w-full max-w-4xl p-4">
        {(showVisitedOnly ? visitedDestinations : destinationsByEstimatedCost)
          .length === 0 ? (
          <p className="text-center text-gray-500">No destinations found.</p>
        ) : (
          (showVisitedOnly
            ? visitedDestinations
            : destinationsByEstimatedCost
          ).map((destination) => {
            return (
              <DestinationCard
                key={destination._id}
                destination={destination}
                /* onDelete={handleDelete} */
              />
            );
          })
        )}
      </div>

      {/* Javított verzió: */}

      {/* <div>
        {sortedDestinations.map((destination) => (
          <DestinationCard
            key={destination._id}
            destination={destination}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <h2>Visited Destinations</h2>
      <div>
        {filterByVisited.map((destination) => (
          <DestinationCard
            key={destination._id}
            destination={destination}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <h2>Cheapest Unvisited Destination</h2>
      {cheapestUnvisitedDestination && (
        <div>
          <DestinationCard
            key={cheapestUnvisitedDestination._id}
            destination={cheapestUnvisitedDestination}
            handleDelete={handleDelete}
          />
        </div>
      )}
      ; */}
    </div>
  );
};

export default HomePage;
