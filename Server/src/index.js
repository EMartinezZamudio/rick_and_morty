const server = require("./server");
const { conn } = require("./DB_connection");

// variables
const PORT = 3001;

// conexion a base de datos
conn
  .sync({})
  .then(() => {
    // salida del servidor
    server.listen(PORT, () => {
      console.log(`Server raised in port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
