// modulos
const express = require("express");
const server = express();
const routers = require("./routes");

// custom middlerwares
const configServerMiddlerware = require("./middlerwares/configServerMiddlerware");

// variables
const PORT = 3001;

// Middlerwares
server.use(configServerMiddlerware());
server.use(express.json());

// servidor
server.use("/rickandmorty", routers);

// salida del servidor
server.listen(PORT, () => {
  console.log(`Server raised in port: ${PORT}`);
});

// ----------------------------- server sin express ---------------------------

// const http = require("http");
// const data = require("./utils/data");
// const getCharById = require("./controllers/getCharById");

// http
//   .createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     const { url } = req;

//     if (url === "/") {
//       res.writeHead(200, { "Content-Type": "text/plain" });
//       return res.end("Hola");
//     }

//     if (url.includes("/rickandmorty/characters/")) {
//       const id = url.split("/").at(-1);
//       return getCharById(res, id);

// const [character] = data.filter((character) => {
//   return character.id === Number(id);
// });
// res.writeHead(200, { "Content-Type": "application/json" });
// return res.end(JSON.stringify(character));
//   }

//   res.writeHead(404);
//   res.end();
// })
// .listen(3001, "localhost");
