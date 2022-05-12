const User = require("../models/user");

module.exports.postUser = (req, res, next) => {
  const NewUser = new User({
    "First Name": req.body["First Name"],
    "Last Name": req.body["Last Name"],
    Gender: req.body["Gender"],
    Email: req.body["Email"],
    DOB: req.body["DOB"],
    "Phone Number": req.body["Phone Number"],
  });
  NewUser.save()
    .then(() => res.send("Created..!"))
    .catch((err) => console.log(err));
  
};

module.exports.getUsers = (req, res, next) => {
  User.find()
    .then((user) => res.send(user))
    .catch((err) => console.log(err));
};

module.exports.postUpdateUser = (req, res, next) => {
  User.findById(req.body.id)
    .then((user) => {
      (user["First Name"] = req.body["First Name"]),
        (user["Last Name"] = req.body["Last Name"]),
        (user["Gender"] = req.body["Gender"]),
        (user["Email"] = req.body["Email"]),
        (user["DOB"] = req.body["DOB"]),
        (user["Phone Number"] = req.body["Phone Number"]);
    })
    .then(() => res.send("Updated Successfully...!"));
};

module.exports.postDeleteUser = (req, res, next) => {
  User.findByIdAndDelete(req.body.id)
    .then(() => console.log("Deleted..!"))
    .catch((err) => console.log(err));
};

module.exports.getUser = (req, res, next) => {
  User.findById(req.params.UserId).then((user) => res.send(user));
};
