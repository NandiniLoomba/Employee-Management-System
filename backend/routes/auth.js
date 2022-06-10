const express = require("express");
const AuthController=require("../controllers/auth")
const Router = express.Router();

Router.post("/login",AuthController.Login);

Router.get("/isLogin",AuthController.isLogin)

Router.get("/logout",AuthController.Logout)

module.exports=Router;