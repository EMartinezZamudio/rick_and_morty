const server = require("./server");

// variables
const PORT = 3001;

// salida del servidor
server.listen(PORT, () => {
  console.log(`Server raised in port: ${PORT}`);
});
