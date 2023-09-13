import { headerContent, headerInput } from "./SearchBar.module.css";

export default function SearchBar(props) {
  return (
    <header className={headerContent}>
      <input className={headerInput} type="search" />
      <button onClick={props.onSearch}>Agregar</button>
    </header>
  );
}
