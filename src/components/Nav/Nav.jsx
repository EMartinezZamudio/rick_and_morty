import PropTypes from "prop-types";
import SearchBar from "../SearchBar/SearchBar";
import { navContent } from "./Nav.module.css";

const Nav = ({ search }) => {
  return (
    <nav className={navContent}>
      <SearchBar search={search} />
    </nav>
  );
};

export default Nav;

Nav.propTypes = {
  search: PropTypes.func,
};
