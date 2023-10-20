const axios = require("axios");

const getCharById = (res, id) => {
  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ data }) => {
      const char = data;

      return {
        id: char.id,
        name: char.name,
        gender: char.gender,
        species: char.species,
        origin: char.origin,
        image: char.image,
        status: char.status,
      };
    })
    .then((response) => {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(response));
    })
    .catch((error) => {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end(error.message);
    });
};

module.exports = getCharById;
