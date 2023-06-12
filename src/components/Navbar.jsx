import { NavLink } from "react-router-dom";
import NavStyles from "../styled-wrappers/Navbar";
import cocktaillogo from "../../public/Cocktail.svg";

export const Navbar = () => {
  return (
    <NavStyles>
      <div className="nav-center">
        <div className="logo">
          <img src={cocktaillogo} alt="Logo" className="cocktail-logo" />
          <span className="logo">MixMaster</span>
        </div>
        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/newsletter" className="nav-link">
            Newsletter
          </NavLink>
        </div>
      </div>
    </NavStyles>
  );
};
