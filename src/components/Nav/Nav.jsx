import PropTypes from "prop-types";
import SearchBar from "../SearchBar/SearchBar";
import { navContent, routes } from "./Nav.module.css";
import { Link } from "react-router-dom";

const Nav = ({ onSearch }) => {
  return (
    <nav className={navContent}>
      <div className={routes}>
        <Link to="/about">
          <span>About</span>
        </Link>
        <Link to="/home">
          <span>Home</span>
        </Link>
      </div>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
};

export default Nav;

Nav.propTypes = {
  onSearch: PropTypes.func,
};
