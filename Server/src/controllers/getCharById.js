// modulos
const axios = require("axios");

// constantes
const URL = `https://rickandmortyapi.com/api/character/`;

const getCharById = async (characterId) => {
  const { data } = await axios(`${URL}${characterId}`);
  const { id, status, name, species, origin, image, gender } = data;
  const character = {
    id,
    status,
    name,
    species,
    origin: origin.name,
    image,
    gender,
  };
  return character;
};

module.exports = getCharById;

// ----------------------------------- con promesas ------------------------------

/* const getCharById = (res, id) => {
  axios(`${URL}${id}`) //
    .then(({ data }) => {
      if (data.name) {
        const { id, status, name, species, origin, image, gender } = data;
        res.json({
          id,
          status,
          name,
          species,
          origin: origin.name,
          image,
          gender,
        });
      }
    })
    .catch((error) => {
      const errorId = error.response.data.error;
      if (errorId === "Character not found") {
        return res.status(404).json({ message: "Not fount" });
      }
      res.status(500).json({ message: error.message });
    });
}; */

// ----------------------------- server sin express ---------------------------

// const axios = require("axios");

// const getCharById = (res, id) => {
//   axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(({ data }) => {
//       const char = data;

//       return {
//         id: char.id,
//         name: char.name,
//         gender: char.gender,
//         species: char.species,
//         origin: char.origin,
//         image: char.image,
//         status: char.status,
//       };
//     })
//     .then((response) => {
//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(JSON.stringify(response));
//     })
//     .catch((error) => {
//       res.writeHead(500, { "Content-Type": "text/plain" });
//       res.end(error.message);
//     });
// };

// module.exports = getCharById;
