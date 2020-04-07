const Router = require('express').Router();

// Route Handlers
Router.route('/list').post(require('./list'));
Router.route('/:wishlistId').get(require('./detail'));
Router.route('/').post(require('./create'));
Router.route('/:wishlistId').put(require('./update'));

module.exports = Router;
