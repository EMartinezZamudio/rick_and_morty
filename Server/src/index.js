const http = require("http");
const data = require("./utils/data");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const { url } = req;
    const id = url.split("/").at(-1);

    if (url === "/") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      return res.end("Hola");
    }

    if (url === `/rickandmorty/characters/${id}`) {
      res.writeHead(200, { "Content-Type": "application/json" });
      const [character] = data.filter(
        (character) => character.id === Number(id)
      );
      return res.end(JSON.stringify(character));
    }

    res.writeHead(404);
    res.end();
  })
  .listen(3001, "localhost");
