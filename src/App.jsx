import Cards from "./components/Cards/Cards.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import characters from "./data.js";
import { app } from "./App.module.css";

function App() {
  return (
    <div className={app}>
      <SearchBar onSearch={(characterID) => window.alert(characterID)} />
      <Cards characters={characters} />
    </div>
  );
}

export default App;
