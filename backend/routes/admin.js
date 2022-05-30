const express = require("express");
const AdminController=require("../controllers/admin")
const Router = express.Router();

Router.post("/add-user",AdminController.postUser);

Router.get("/get-users",AdminController.getUsers);

Router.get("/get-roles",AdminController.getRoles);

Router.post("/update-user",AdminController.postUpdateUser);

Router.post("/delete-user",AdminController.postDeleteUser)

Router.get("/:UserId",AdminController.getUser)

Router.post("/add-role",AdminController.postRole);

module.exports=Router;