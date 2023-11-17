const { User } = require("../DB_connection");

const postUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Faltan datos" });
    }

    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: { password },
    });

    if (created) {
      res.status(200).json(user);
    } else {
      res.status(400).json({ message: "El usuario ya existe" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postUser;
