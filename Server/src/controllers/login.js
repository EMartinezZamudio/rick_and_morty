const { User } = require("../DB_connection");

const login = async (req, res) => {
  try {
    const { email, password } = req.query;
    if (!email || !password) {
      return res.status(400).json({ messege: "Faltan datos" });
    }

    const user = await User.findOne({ where: { email } });

    if (user) {
      password === user.password
        ? res.status(200).json({ access: true })
        : res.status(403).json({ message: "Contraseña incorrecta" });
    } else {
      res.status(404).json({ messege: "Usuario no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// const users = require("../utils/users");

// const login = (req, res) => {
//   const { email, password } = req.query;

//   const user = users.find((user) => {
//     return user.email === email && user.password === password;
//   });

//   user
//     ? res.status(200).json({ access: true })
//     : res.status(200).json({ access: false });

// };

module.exports = login;
