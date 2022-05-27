const User = require("../models/user");

module.exports.Login = (req, res, next) => {
 
  const { email, password } = req.body;
 
  User.findOne({ email})
    .then(async (user) => {
      
      if (user.password===password) {
        
        const token = await user.generateToken();
        res.cookie("jwt", token, { httpOnly: true });
        res.send("done")
        
      } else {
        res.send("Incorrect password..!");
      }
    })
    .catch((err) => console.log(err));
};
