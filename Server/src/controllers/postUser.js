const { User } = require("../DB_connection");

const postUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) res.status(400).json({ error: "Faltan datos" });

  const [user, created] = await User.findOrCreate({
    where: { email },
    defaults: { password },
  });

  if (created) {
    res.status(200).json({ message: "Usuario Guardado" });
  } else {
    res.status(400).json({ error: "El usuario ya existe" });
  }
};

module.exports = postUser;
