const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Schema = mongoose.Schema;

const User = new Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  dob: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

User.methods.generateToken = async function () {
  try {
    const token = jwt.sign({ id: this.id }, process.env.SECRET, {
      expiresIn: "60m",
    });
    return token;
  } catch (err) {
    console.log(err);
  }
};

module.exports = mongoose.model("User", User);
