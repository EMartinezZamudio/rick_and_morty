let myFavorites = [];

const postFav = (req, res) => {
  myFavorites.push(req.body);
  res.json(myFavorites);
};

const deleteFav = (req, res) => {
  const id = Number(req.params.id);

  if (typeof id === "number") {
    myFavorites = myFavorites.filter((char) => {
      return char.id !== id;
    });

    return res.json(myFavorites);
  }

  res.status(404).json({ message: "Error in id, must be a number" });
};

module.exports = {
  postFav,
  deleteFav,
};
