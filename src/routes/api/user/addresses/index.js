const Router = require('express').Router();

Router.route('/')
    .post(require('./create'));

Router.route('/:_id')
    .patch(require('./update'));

Router.route('/:_id')
    .delete(require('./delete'));

module.exports = Router;