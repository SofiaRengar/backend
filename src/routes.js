const express = require("express");

const routes = express.Router();
const UserController = require("./controllers/UserController");

routes.post("/User", UserController.store);

routes.get("/User/:email", UserController.index);

module.exports = routes;