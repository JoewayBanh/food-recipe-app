import React, { useState } from "react";
import RecipeDetails from "./RecipeDetails";

const Recipe = ({ recipe }) => {
  const [show, setShow] = useState(false);

  const { label, image, url, ingredients } = recipe.recipe;

  return (
    <div className="recipe">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <h2>{label}</h2>
      </a>
      <img src={image} alt={label} />
      <button onClick={() => setShow(!show)}>Ingredients</button>
      {show && <RecipeDetails ingredients={ingredients} />}
    </div>
  );
};

export default Recipe;
