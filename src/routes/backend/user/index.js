const Router = require('express').Router();

// Route Handlers
Router.route('/login')
    .post(require('./login'));

module.exports = Router;
