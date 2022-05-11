const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./config.json");
const api = require("./api/index");

mongoose.connect(config.KEY, () => {
  console.log("Database connected successfully..!");
});

app.use(api);

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

const server = app.listen(config.PORT, () => {
  console.log("Listening to the port", config.PORT);
});

module.exports = server;
