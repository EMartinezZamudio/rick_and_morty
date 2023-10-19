const axios = require("axios");

const getCharById = (res, id) => {
  const character = axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ data }) => {
      const { name, gender, species, origin, image, status } = data;
      return { name, gender, species, origin, image, status };
    })
    .catch((error) => {
      throw new Error(error);
    });

  console.log(character);
};

getCharById(null, 5);

module.exports = getCharById;
