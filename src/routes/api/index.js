const Router = require('express').Router();

// Route handlers
Router.use("/user", require('./user'));

module.exports = Router;
