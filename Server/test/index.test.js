const server = require("../src/server");
const session = require("supertest");
const agent = session(server);

describe("test de RUTAS", () => {
  describe("GET /rickandmorty/characters/:id", () => {
    it("Responde con status: 200", async () => {
      await agent.get("/rickandmorty/characters/1").expect(200);
      await agent.get("/rickandmorty/characters/15").expect(200);
      await agent.get("/rickandmorty/characters/120").expect(200);
    });

    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
      const { body } = await agent.get("/rickandmorty/characters/1");
      const propertys = [
        "id",
        "name",
        "species",
        "gender",
        "status",
        "origin",
        "image",
      ];
      propertys.forEach((prop) => {
        expect(body).toHaveProperty(prop);
      });
    });

    it("Si hay un error responde con status: 500", async () => {
      await agent.get("/rickandmorty/characters/hola").expect(500);
      await agent.get("/rickandmorty/characters/sarasa").expect(500);
    });
  });

  describe("GET /rickandmorty/login", () => {
    it("Debe devolver true cuando los datos son correctos", async () => {
      const URL = "/rickandmorty/login";
      const email = "emmanuel@gmail.com";
      const password = "hola123";

      const { body } = await agent.get(
        `${URL}?email=${email}&password=${password}`
      );
      expect(body).toEqual({ access: true });
    });

    it("Debe devolver false cuando los datos son incorrectos", async () => {
      const URL = "/rickandmorty/login";
      const email = "emmanuel@gmail.com";
      const password = "hola12";

      const { body } = await agent.get(
        `${URL}?email=${email}&password=${password}`
      );
      expect(body).toEqual({ access: false });
    });
  });

  describe("POST /rickandmorty/fav", () => {
    const URL = "/rickandmorty/fav";
    const character1 = { id: 1, name: "Emmanuel", edad: 27 };
    const character2 = { id: 2, name: "Dayana", edad: 22 };

    it("Debe devolver lo que se envia por body", async () => {
      await agent
        .post(URL)
        .send(character1)
        .expect([{ id: 1, name: "Emmanuel", edad: 27 }]);
    });

    it("Si se vuelve a enviar un nuevo elemento, debe contener el elemento enviado antes", async () => {
      await agent
        .post(URL)
        .send(character2)
        .expect([
          { id: 1, name: "Emmanuel", edad: 27 },
          { id: 2, name: "Dayana", edad: 22 },
        ]);
    });
  });
});
