import {
  headerContent,
  headerInput,
  headerButton,
} from "./SearchBar.module.css";

export default function SearchBar(props) {
  return (
    <header className={headerContent}>
      <input className={headerInput} type="search" />
      <button className={headerButton} onClick={props.onSearch}>
        Agregar
      </button>
    </header>
  );
}
