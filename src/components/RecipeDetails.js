const RecipeDetails = ({ ingredients }) => {
  return ingredients.map((ingredient) => {
    return (
      <ul className="ingredient-list">
        <li className="ingredient-text">{ingredient.text}</li>
      </ul>
    );
  });
};

export default RecipeDetails;
