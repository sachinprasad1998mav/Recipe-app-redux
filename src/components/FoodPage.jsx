import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import FoodList from "./FoodList";
import {
  fetchDataStart,
  fetchDataSuccess,
  fetchDataFailure,
} from "../utils/RecipeSlice";

const FoodPage = () => {
  const [searchFood, setSearchFood] = useState("salad");
  const foodAPI = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

  const dispatch = useDispatch();

  const fetchData = async () => {
    dispatch(fetchDataStart());
    try {
      const response = await fetch(foodAPI + searchFood);
      const data = await response.json();

      // Check if `data.meals` exists and is not null
      if (data.meals) {
        dispatch(fetchDataSuccess(data.meals));
      } else {
        // Handle the case where no meals are found (optional)
        dispatch(fetchDataSuccess([])); // Dispatch an empty array or handle as needed
      }
    } catch (error) {
      dispatch(fetchDataFailure(error));
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchFood, dispatch]);

  return (
    <div>
      <div className="flex justify-center mt-3">
        <div className="flex justify-center items-center border border-gray-800 rounded-lg overflow-hidden w-full max-w-sm">
          <input
            type="text"
            placeholder="Search Recipe"
            className="flex-grow px-4 py-2 text-gray-700 focus:outline-none "
            onChange={(e) => setSearchFood(e.target.value)}
            value={searchFood}
          />
        </div>
      </div>
      <FoodList />
    </div>
  );
};

export default FoodPage;
