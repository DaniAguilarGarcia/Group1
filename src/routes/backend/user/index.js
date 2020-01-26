const Router = require('express').Router();

// Route Handlers
Router.route('/login')
    .post(require('./login'));

Router.route('/me')
    .get(require('./me'));

module.exports = Router;
