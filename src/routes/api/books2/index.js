const Router = require('express').Router();

// Route Handlers
Router.route('/').get(require('./list'));
Router.route('/:bookId').get(require('./detail'));

module.exports = Router;
