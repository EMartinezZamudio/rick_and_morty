// modulos
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

// componentes
import Nav from "./components/Nav/Nav.jsx";
import About from "./views/About/About.jsx";
import Home from "./views/Home/Home.jsx";
import Landing from "./views/Landing/Landind.jsx";
import Detail from "./views/Detail/Detail.jsx";
import Favorites from "./views/Favorites/Favorites.jsx";

// hooks
import { useEffect, useState } from "react";

// estilos
import { app } from "./App.module.css";

function App() {
  // estados locales
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  // hooks de react-router.dom
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const onSearch = async (id) => {
    try {
      const { data } = await axios(
        `http://localhost:3001/rickandmorty/characters/${id}`
      );
      for (let character of characters) {
        if (character.id === Number(id)) return;
      }

      setCharacters((oldChars) => [...oldChars, data]);
    } catch (error) {
      window.alert(error.response.data.message);
    }
  };

  const onClose = (id) => {
    setCharacters((characters) => {
      return characters.filter((character) => {
        if (Number(id) !== character.id) return character;
      });
    });
  };

  const login = async (userData) => {
    try {
      const URL = "http://localhost:3001/rickandmorty/login";
      const { email, password } = userData;

      const { data } = await axios(
        `${URL}?email=${email}&password=${password}`
      );
      setAccess(data.access);
      !data.access && alert("email y/o contraseña incorrectos");
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    access ? navigate("/home") : navigate("/");
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
