import Nav from "./components/Nav/Nav.jsx";
import { app } from "./App.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./views/About/About.jsx";
import Home from "./views/Home/Home.jsx";
import Landing from "./views/Landing/Landind.jsx";
import Detail from "./views/Detail/Detail.jsx";
import Favorites from "./views/Favorites/Favorites.jsx";

function App() {
  const [characters, setCharacters] = useState([]);

  const { pathname } = useLocation();

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

  const navigate = useNavigate();

  const [access, setAccess] = useState(false);
  const EMAIL = "emmanuel@gmail.com";
  const PASSWORD = "hola123";

  const login = (data) => {
    if (!data.email || !data.password)
      alert("Llene los campos email y contraseña");
    else if (data.email === EMAIL && data.password === PASSWORD) {
      setAccess(true);
      navigate("/home");
    } else alert("email y/o contraseña incorrectos");
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const body = document.querySelector("body");

  if (pathname === "/") body.className = "bg-login";
  else body.className = "";

  return (
    <div className={app}>
      {pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Landing login={login} />} />

        <Route
          path="/home"
          element={<Home characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />

        <Route path="/detail/:id" element={<Detail />} />

        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
