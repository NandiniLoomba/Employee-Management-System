const express = require("express");
const AuthController=require("../controllers/auth")
const Router = express.Router();

Router.post("/login",AuthController.Login);

// Router.post("/refresh",AuthController.RefreshToken);

// Router.post("/logout",AuthController.Logout);

module.exports=Router;