import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePage = () => {
  //Lehetne csak egy form state és loading state

  /*  
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
  name: "",
  country: "",
  img: "",
  description: "",
  estimatedCost: 0,
  bestSeason: "",
  visited: false,
}); */

  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");
  const [estimatedCost, setEstimatedCost] = useState(""); // estimatedCost : Number , ebből kifolyólag az input-ja is number tipusu kellene hogy legyen és a state kezdő értéke lehetne 0.
  const [bestSeason, setBestSeason] = useState("");
  const [visited, setVisited] = useState(false);

  const navigate = useNavigate();

  /* HANDLE ADD DESTINATION */
  const handleAddDestination = async (event) => {
    event.preventDefault();
    const newDestination = {
      name,
      country,
      img,
      description,
      estimatedCost,
      bestSeason,
      visited,
    };
    try {
      //setLoading(true)
      const response = await fetch(
        "http://localhost:1988/api/destinations/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newDestination),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to add destination");
      }

      navigate("/");
    } catch (error) {
      console.error("Error adding destination:", error);
    }
    /* finally{
      setLoading(false)
    } */
  };

  return (
    <div>
      <h1>Add a dream destination to your bucket list</h1>
      <form
        onSubmit={handleAddDestination}
        className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md flex flex-col gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          //onChange={(e) => setForm({...form, name: e.target.value})}
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="country"
          placeholder="country"
          value={country}
          onChange={(event) => setCountry(event.target.value)}
          //onChange={(e) => setForm({...form, country: e.target.value})}
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="img"
          placeholder="image URL"
          value={img}
          onChange={(event) => setImg(event.target.value)}
          //onChange={(e) => setForm({...form, img: e.target.value})}
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="description"
          placeholder="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          //onChange={(e) => setForm({...form, description: e.target.value})}
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="text" // number kellene hogy legyen
          name="estimatedCost"
          placeholder="estimated cost"
          value={estimatedCost}
          onChange={(event) => setEstimatedCost(event.target.value)}
          //onChange={(e) => setForm({...form, estimatedCost: e.target.value})}
          className="p-2 border border-gray-300 rounded"
        />
        <select
          name="bestSeason"
          value={bestSeason}
          onChange={(event) => setBestSeason(event.target.value)}
          //onChange={(e) => setForm({...form, bestSeason: e.target.value})}
          className="cursor-pointer p-2 border border-gray-300 rounded"
        >
          <option value="">Select best season</option>
          <option value="spring">Spring</option>
          <option value="summer">Summer</option>
          <option value="fall">Fall</option>
          <option value="winter">Winter</option>
        </select>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="visited"
            checked={visited}
            onChange={(event) => setVisited(event.target.checked)}
            //onChange={(e) => setForm({...form, visited: e.target.checked})}
            className="w-4 h-4"
          />
          <span>Already visited</span>
        </label>

        <button
          /* disabled={loading} */ type="submit"
          className="bg-blue-500 text-white p-2 rounded"
        >
          Add destination
          {/* {loading ? "Loading..." : "Add destination"} */}
        </button>
      </form>
    </div>
  );
};

export default CreatePage;
