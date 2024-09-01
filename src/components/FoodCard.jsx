import React from "react";
import { useNavigate } from "react-router-dom";

const FoodCard = ({ idMeal, name, cuisine, image }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/recipe/${idMeal}`);
  };
  return (
    <div
      onClick={handleCardClick}
      className="max-w-lg m-5 rounded overflow-hidden shadow-lg"
    >
      <img className="w-full" src={image} alt="Food Image" />
      <div className="px-6 py-4 bg-slate-500">
        <div className="font-bold text-base mb-2">{name}</div>
        <p className=" text-base">{cuisine}</p>
      </div>
    </div>
  );
};

export default FoodCard;
