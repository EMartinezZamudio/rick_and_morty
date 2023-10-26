const users = require("../utils/users");

const login = (req, res) => {
  const { email, password } = req.body;

  users.forEach((user) => {
    if (user.email === email && user.password === password) {
      return res.status(200).json({ access: true });
    }
  });

  return res.status(200).json({ access: false });
};
