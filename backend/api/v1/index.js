const express = require("express");
const userFile = require("./userController");
const router = express.Router();

router.use("/users", userFile);

module.exports = router;
