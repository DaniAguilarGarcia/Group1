const Router = require('express').Router();

// Route Handlers
Router.route('/login')
    .post(require('./login'));

Router.route('/me')
    .get(require('./me'));

Router.route('/signup')
    .post(require('./signup'));

module.exports = Router;
