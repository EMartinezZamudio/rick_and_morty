import Nav from "./components/Nav/Nav.jsx";
import { app } from "./App.module.css";
import { useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import About from "./views/About/About.jsx";
import Home from "./views/Home/Home.jsx";
import Landing from "./views/Landing/Landind.jsx";
import Detail from "./views/Detail/Detail.jsx";

function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          for (let character of characters) {
            if (character.id === Number(id)) return characters;
          }
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  };

  const onClose = (id) => {
    setCharacters((characters) => {
      return characters.filter((character) => {
        if (Number(id) !== character.id) return character;
      });
    });
  };

  return (
    <div className={app}>
      <Nav onSearch={onSearch} />
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route
          path="/home"
          element={<Home characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />

        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
