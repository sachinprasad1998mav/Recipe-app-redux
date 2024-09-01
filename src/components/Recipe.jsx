import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const { foodId } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setRecipe(data.meals[0]); // Assuming there is always one meal object in the response
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [foodId]);

  if (loading) return <p className="text-center text-xl">Loading...</p>;
  if (error)
    return (
      <p className="text-center text-xl text-red-500">Error: {error.message}</p>
    );

  if (!recipe) return <p className="text-center text-xl">No recipe found.</p>;

  return (
    <div className="bg-gray-400 min-h-screen flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <h1 className="text-4xl font-bold mb-4 text-center">
          {recipe.strMeal}
        </h1>
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full h-80 object-cover rounded-t-lg mb-4"
        />
        <div className="p-6">
          <p className="text-lg font-semibold mb-2">
            Category: <span className="font-normal">{recipe.strCategory}</span>
          </p>
          <p className="text-lg font-semibold mb-2">
            Cuisine: <span className="font-normal">{recipe.strArea}</span>
          </p>
          <p className="text-lg mb-4">
            <span className="font-semibold">Instructions:</span>{" "}
            {recipe.strInstructions}
          </p>
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Ingredients:</h2>
            <ul className="list-disc pl-5">
              {[...Array(20)].map((_, i) => {
                const ingredient = recipe[`strIngredient${i + 1}`];
                const measure = recipe[`strMeasure${i + 1}`];
                return ingredient ? (
                  <li key={i} className="text-lg">
                    {measure} {ingredient}
                  </li>
                ) : null;
              })}
            </ul>
          </div>
          <div className="flex justify-between">
            {recipe.strSource && (
              <a
                href={recipe.strSource}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-800 hover:underline"
              >
                Recipe Source
              </a>
            )}
            {recipe.strYoutube && (
              <a
                href={recipe.strYoutube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Watch on YouTube
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
