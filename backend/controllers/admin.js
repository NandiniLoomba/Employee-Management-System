const User = require("../models/user");
const Role = require("../models/role");

module.exports.postUser = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user) {
        res.send("Email already exists....");
      } else {
        Role.findOne({ role: req.body.role }).then((newuser) => {
          if (newuser) {
            const { fname, lname, gender, email, dob, phone, password, role } =
              req.body;
            const NewUser = new User({
              fname,
              lname,
              gender,
              email,
              dob,
              phone,
              password,
              role,
            });
            NewUser.save()
              .then(() => res.send("Created..!"))
              .catch((err) => console.log(err));
          } else res.send("Role doesn't exits..");
        });
      }
    })
    .catch((err) => console.log(err));
};

module.exports.getUsers = (req, res, next) => {
  User.find()
    .then((user) => res.send(user))
    .catch((err) => console.log(err));
};

module.exports.getRoles = (req, res, next) => {
  Role.find()
    .then((role) => res.send(role))
    .catch((err) => console.log(err));
};

module.exports.postUpdateUser = (req, res, next) => {
  User.findById(req.body.id)
    .then((user) => {
      user.fname = req.body.fname;
      user.lname = req.body.lname;
      user.gender = req.body.gender;
      user.email = req.body.email;
      user.dob = req.body.dob;
      user.phone = req.body.phone;
      user.role = req.body.role;
      user.save();
    })
    .then(() => res.send("Updated..!"));
};

module.exports.postDeleteUser = (req, res, next) => {
  User.findByIdAndDelete(req.body.id)
    .then(() => console.log("Deleted..!"))
    .catch((err) => console.log(err));
};

module.exports.getUser = (req, res, next) => {
  User.findById(req.params.UserId).then((user) => res.send(user));
};

module.exports.postRole = (req, res, next) => {
  Role.findOne({ role: req.body.role }).then((role) => {
    if (role) {
      res.send("This role already exists..");
    } else {
      const NewRole = new Role({
        role: req.body.role,
      });
      NewRole.save()
        .then(() => res.send("Role created...!"))
        .catch((err) => console.log(err));
    }
  });
};
