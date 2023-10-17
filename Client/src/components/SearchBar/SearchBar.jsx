import PropTypes from "prop-types";
import { headerInput, headerButton, searchBar } from "./SearchBar.module.css";
import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (id) onSearch(id);
    setId("");
  };

  return (
    <div className={searchBar}>
      <form onSubmit={onSubmit}>
        <input
          className={headerInput}
          type="search"
          onChange={handleChange}
          value={id}
          placeholder="ingresa el id"
        />
      </form>
      <button className={headerButton} onClick={onSubmit}>
        Agregar
      </button>
    </div>
  );
}

SearchBar.propTypes = {
  onSearch: PropTypes.func,
};
