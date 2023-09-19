import PropTypes from "prop-types";
import SearchBar from "../SearchBar/SearchBar";
import { navContent } from "./Nav.module.css";

const Nav = ({ onSearch }) => {
  return (
    <nav className={navContent}>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
};

export default Nav;

Nav.propTypes = {
  onSearch: PropTypes.func,
};
