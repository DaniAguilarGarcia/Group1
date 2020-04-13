const Router = require('express').Router();

// Route Handlers
Router.route('/login')
    .post(require('./login'));

Router.route('/logout')
    .post(require('./logout'));

Router.route('/me')
    .get(require('./me'));

Router.route('/signup')
    .post(require('./signup'));

Router.route('/profile')
    .patch(require('./profile'));

Router.use("/methods", require('./methods'));

Router.use("/addresses", require('./addresses'));

module.exports = Router;
