const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const AdminRoutes = require("./routes/admin");
const AuthRoutes = require("./routes/auth");
const cookieParser = require("cookie-parser");
require("dotenv").config();

mongoose.connect(process.env.KEY, () => {
  console.log("Database connected successfully..!");
});

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(AuthRoutes);
app.use(AdminRoutes);

const server = app.listen(process.env.PORT, () => {
  console.log("Listening to the port", process.env.PORT);
});

module.exports = server;
