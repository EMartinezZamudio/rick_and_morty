const { Favorite } = require("../DB_connection");

const fetchFav = async (req, res) => {
  try {
    const allFavorites = await Favorite.findAll();
    res.status(200).json(allFavorites);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = fetchFav;
