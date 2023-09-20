import PropTypes from "prop-types";
import { headerInput, headerButton, searchBar } from "./SearchBar.module.css";
import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const handleClick = () => {
    if (id) onSearch(id);
    setId("");
  };

  return (
    <div className={searchBar}>
      <input
        className={headerInput}
        type="search"
        onChange={handleChange}
        value={id}
        placeholder="ingresa el id"
      />
      <button className={headerButton} onClick={handleClick}>
        Agregar
      </button>
    </div>
  );
}

SearchBar.propTypes = {
  onSearch: PropTypes.func,
};
