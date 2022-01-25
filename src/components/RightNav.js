import styled from "styled-components";
import { Link } from "react-router-dom";

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/Ingredients">
        <li>Ingredients</li>
      </Link>
      <Link to="/Recipe-Page">
        <li>Recipes</li>
      </Link>
      <Link to="/Contact">
        <li>Contact</li>
      </Link>
    </Ul>
  );
};

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  font-size: 1.5em;

  li {
    padding: 18px 10px;
    color: #fff;
  }
  li:hover {
    color: yellowgreen;
  }

  @media (max-width: 768px) {
    font-size: 2em;
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 500px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 19;
    li {
      color: #fff;
    }
    li a:visited {
      color: #fff;
    }
  }
`;
export default RightNav;
