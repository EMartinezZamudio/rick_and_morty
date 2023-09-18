import PropTypes from "prop-types";
import { headerInput, headerButton } from "./SearchBar.module.css";
import { useState } from "react";

export default function SearchBar({ search }) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const handleClick = () => {
    if (id) search(id);
    setId("");
  };

  return (
    <>
      <input
        className={headerInput}
        type="search"
        onChange={handleChange}
        value={id}
      />
      <button className={headerButton} onClick={handleClick}>
        Agregar
      </button>
    </>
  );
}

SearchBar.propTypes = {
  search: PropTypes.func,
};
