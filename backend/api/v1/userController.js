const express = require("express");
const router = express.Router();

// router.post("/create-NewUser", async (req, res) => {
//   return res.send("New User created successfully.");
// });

router.get("/user-list", (req, res) => {
  
  return res.send("New User created successfully.");
});

// router.delete("/create-NewUser", async (req, res) => {
//   return res.send("New User created successfully.");
// });

// router.update("/user-list", async (req, res) => {
//   return res.send("New User created successfully.");
// });

module.exports = router;
