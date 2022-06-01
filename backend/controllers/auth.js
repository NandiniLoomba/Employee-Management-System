const User = require("../models/user");

module.exports.Login = (req, res, next) => {
  const { email, password } = req.body;

  User.findOne({ email })
    .then(async (user) => {
      if (!user) {
        return res.send({ validity: 0, error: "Email is not found...!" });
      }
      if (user.password === password) {
        const token = await user.generateToken();
        res.cookie("jwt", token, { httpOnly: true });
        res.send({ validity: 1 });
      } else {
        res.send({ validity: 0, error: "Incorrect password...!" });
      }
    })
    .catch((err) => console.log(err));
};
