let myFavorites = [];

const postFav = (req, res) => {
  myFavorites.push(req.body);
  res.json(myFavorites);
};

const deleteFav = (req, res) => {
  const { id } = req.query;
  myFavorites = myFavorites.filter((char) => {
    return char.id !== id;
  });

  res.json(myFavorites);
};

module.exports = {
  postFav,
  deleteFav,
};
