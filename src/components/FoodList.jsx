import React from "react";
import { useSelector } from "react-redux";
import FoodCard from "./FoodCard";

const FoodList = () => {
  const { data, loading, error } = useSelector((state) => state.Recipe);

  // Convert the object to an array of values
  const foodItems = Object.values(data);

  if (!foodItems.length) {
    return <p>No data available</p>;
  }

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div className="m-20 grid grid-cols-4 gap-4">
        {data.map((foodItem) => (
          <FoodCard
            key={foodItem.idMeal}
            idMeal={foodItem.idMeal}
            name={foodItem.strMeal}
            cuisine={foodItem.strArea} // Assuming strArea contains cuisine info
            image={foodItem.strMealThumb}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodList;
