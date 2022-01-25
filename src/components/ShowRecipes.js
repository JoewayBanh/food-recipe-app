import Recipe from "./Recipe";
import "./RecipePage.css";
import "./SearchBar.css";

function ShowRecipes({ result }) {
  return (
    <>
      <Recipe recipe={result} />
    </>
  );
}
export default ShowRecipes;
