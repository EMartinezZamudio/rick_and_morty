const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  const { name, origin, status, image, species, gender } = req.body;

  if (!name || !origin || !status || !image || !species || !gender) {
    return res.status(401).json({ message: "Faltan datos" });
  }
  const character = { name, origin, status, image, species, gender };
  await Favorite.create(character);

  const allCharacters = await Favorite.findAll();
  res.status(200).json(allCharacters);
};

module.exports = postFav;
