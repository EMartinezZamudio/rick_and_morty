// modulos
const express = require("express");
const server = express();
const getCharById = require("./controllers/getCharById");

// variables
const PORT = 3001;

server.get("/", (req, res) => {
  res.send("Hi!, I'm manu's server");
});

server.get("/characters/:id", (req, res) => {
  const id = Number(req.params.id);

  if (typeof id === "number") {
    return getCharById(res, id);
  }
});

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
