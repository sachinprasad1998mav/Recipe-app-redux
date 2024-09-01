import React from "react";
import FoodPage from "./FoodPage";

const HomePage = () => {
  return (
    <div className="bg-indigo-300 min-h-screen">
      <div className="App flex justify-center ">
        <h1 className="font-serif text-green-800 text-4xl">Recipe Redux</h1>
      </div>
      <FoodPage></FoodPage>
    </div>
  );
};

export default HomePage;
