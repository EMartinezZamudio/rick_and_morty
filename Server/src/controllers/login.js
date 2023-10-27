const users = require("../utils/users");

const login = (req, res) => {
  const { email, password } = req.query;

  // users.forEach((user) => {
  //   if (user.email === email && user.password === password) {
  //     res.status(200).json({ access: true });
  //     return;
  //   }
  // });

  const user = users.find((user) => {
    return user.email === email && user.password === password;
  });

  user
    ? res.status(200).json({ access: true })
    : res.status(200).json({ access: false });

  // res.status(200).json({ access: false });
  // return;
};

module.exports = login;
