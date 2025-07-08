import React from "react";
import { Link } from "react-router-dom";
import CreatePage from "../pages/CreatePage"; // Felesleges importok
import DestinationPage from "../pages/DestinationPage";
import HomePage from "../pages/HomePage";

const Navbar = () => {
  return (
    <div className="bg-blue-500 text-white- p-4 shadow-md w-full">
      <h2 className="text-center font-semibold text-lg">
        MY DREAM DESTINATIONS
      </h2>
      <div>
        <Link to="/" className="hover:underline font-bold text-white">
          Home
        </Link>
        <Link
          to="/create"
          className="hover:underline font-bold text-white ml-4"
        >
          Create
        </Link>

        {/* Ne hagyj kommentet a kódban amikor feltöltöd. */}

        {/*         <Link
          to="/destinations"
          className="hover:underline font-bold text-white ml-4"
        >
          Destinations
        </Link> */}
      </div>
    </div>
  );
};

export default Navbar;
