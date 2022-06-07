const User = require("../models/user");
const Role = require("../models/role");

module.exports.postUser = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user) {
        return res.send({ validity: 0, error: "Email already exists...!" });
      }

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
        .then(() => res.send({ validity: 1 }))
        .catch((err) => console.log(err));
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
  const {_id,email, lname, fname, dob, phone, gender, role, password}=req.body;
  User.findById(_id)
    .then((user) => {
      user.fname = fname;
      user.lname = lname;
      user.gender = gender;
      user.email = email;
      user.dob = dob;
      user.phone = phone;
      user.role = role;
      user.password=password;
      user.save();
    })
    .then(() => res.send("Updated..!"));
};

module.exports.postDeleteUser = (req, res, next) => {
  User.findByIdAndDelete(req.body.id)
    .then(() => res.send("Deleted...!"))
    .catch((err) => console.log(err));
};

module.exports.getUser = (req, res, next) => {
  User.findById(req.params.UserId).then((user) => res.send(user));
};

module.exports.postRole = (req, res, next) => {
  Role.findOne({ role: req.body.role }).then((role) => {
    if (role) {
      res.send({ validity: 0, error: "This role already exists...!" });
    } else {
      const NewRole = new Role({
        role: req.body.role,
      });
      NewRole.save()
        .then(() => res.send({ validity: 1 }))
        .catch((err) => console.log(err));
    }
  });
};
