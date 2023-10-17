import PropTypes from "prop-types";
import SearchBar from "../SearchBar/SearchBar";
import { navContent, routes, active, pending } from "./Nav.module.css";
import { NavLink } from "react-router-dom";

const Nav = ({ onSearch }) => {
  return (
    <nav className={navContent}>
      <div className={routes}>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? active : pending)}
        >
          About
        </NavLink>

        <NavLink
          to="/home"
          className={({ isActive }) => (isActive ? active : pending)}
        >
          Home
        </NavLink>
        <NavLink
          to="/favorites"
          className={({ isActive }) => (isActive ? active : pending)}
        >
          Favorites
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
