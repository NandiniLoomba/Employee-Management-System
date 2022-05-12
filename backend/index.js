const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./config.json");
const routes = require("./routes/admin");
const logger = require("express-logger");

mongoose.connect(config.KEY, () => {
  console.log("Database connected successfully..!");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use(routes);

const server = app.listen(config.PORT, () => {
  console.log("Listening to the port", config.PORT);
});

module.exports = server;
