// modulos
const express = require("express");
const routers = express.Router();

// controllers
const getCharById = require("../controllers/getCharById");
const login = require("../controllers/login");
const { postFav, deleteFav } = require("../controllers/handleFavorites");

routers.get("/", (req, res) => {
  res.send("Hi!, I'm manu's server");
});

routers.get("/characters/:id", (req, res) => {
  const id = Number(req.params.id);

  if (typeof id === "number") {
    return getCharById(res, id);
  }
});

routers.get("/login", login);
routers.post("/fav", postFav);
routers.delete("/fav/:id", deleteFav);

module.exports = routers;
