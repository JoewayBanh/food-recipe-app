import { NavLink } from "react-router-dom";
import "./StylePage.css";

const FrontBtns = () => {
  return (
    <div className="div-ingredients-btn">
      <NavLink exact to="/Ingredients">
        <button className="front-btn">Ingredients</button>
      </NavLink>
      <NavLink exact to="/Recipe-Page">
        <button className="front-btn">Recipes</button>
      </NavLink>
    </div>
  );
};
export default FrontBtns;
