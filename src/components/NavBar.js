import styled from "styled-components";
import Burger from "./Burger";

const Navbar = () => {
  return (
    <Nav>
      <div className="search-bar">{}</div>
      <Burger />
    </Nav>
  );
};

const Nav = styled.nav`
  background-color: #828282;
  color: white;
  width: 100%;
  height: 55px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  }
`;

export default Navbar;
