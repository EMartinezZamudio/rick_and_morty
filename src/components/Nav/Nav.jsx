import PropTypes from "prop-types";
import SearchBar from "../SearchBar/SearchBar";
import { navContent, routes } from "./Nav.module.css";
import { NavLink } from "react-router-dom";

const Nav = ({ onSearch }) => {
  return (
    <nav className={navContent}>
      <div className={routes}>
        <NavLink to="/about">
          <span>About</span>
        </NavLink>
        <NavLink to="/home">
          <span>Home</span>
        </NavLink>
      </div>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
};

export default Nav;

Nav.propTypes = {
  onSearch: PropTypes.func,
};
