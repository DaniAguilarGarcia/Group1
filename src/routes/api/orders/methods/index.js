const Router = require("express").Router();

Router.route("/create").post(require("./create"));

Router.route("/:id").get(require("./all"));

module.exports = Router;