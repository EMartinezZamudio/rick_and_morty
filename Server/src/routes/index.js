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

routers.get("/character/:id", (req, res) => {
  const id = Number(req.params.id);

  if (typeof id === "number") {
    return getCharById(res, id);
  }
});

routers.get("/login", (req, res) => {
  login(req, res);
});

routers.post("/fav", (req, res) => {
  postFav(req, res);
});

routers.delete("/fav/:id", (req, res) => {
  deleteFav(req, res);
});

module.exports = routers;
