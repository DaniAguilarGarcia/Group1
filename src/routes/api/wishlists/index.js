const Router = require('express').Router();

// Route Handlers
Router.route('/').get(require('./list'));
Router.route('/:wishlistId').get(require('./detail'));
Router.route('/').post(require('./create'));

module.exports = Router;
