import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TopFoods = () => {
  const [topFoods, setTopFoods] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/foods")
      .then((res) => res.json())
      .then((data) => {
        // Sort by highest purchase count
        const sortedFoods = data.sort((a, b) => b.purchases - a.purchases);
        // Select top 6 foods
        setTopFoods(sortedFoods.slice(0, 6));
      })
      .catch((error) => console.error("Error fetching food data:", error));
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Top Selling Foods</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topFoods.map((food) => (
          <div key={food._id} className="card bg-base-100 shadow-xl p-4">
            <img src={food.image} alt={food.name} className="h-44 w-full object-cover rounded-md" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{food.name}</h3>
              <p className="text-gray-600">Price: ${food.price}</p>
              <p className="text-gray-600">Purchases: {food.purchases}</p>
              <div className="flex justify-between mt-4">
                <Link to={`/foodDetails/${food._id}`}>
                  <button className="btn btn-warning">View Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <Link to="/foods">
          <button className="btn btn-primary">See All</button>
        </Link>
      </div>
    </div>
  );
};

export default TopFoods;
