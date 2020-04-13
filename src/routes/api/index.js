const Router = require('express').Router();

// Route handlers
Router.use("/user", require('./user'));
Router.use("/reviews", require('./reviews'));

module.exports = Router;
