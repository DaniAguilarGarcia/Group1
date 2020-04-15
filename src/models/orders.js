const mongoose = require('mongoose');

/**
 * @typedef {Object} Orders
 * @property {string} id
 * @property {string} nickname
 */

const schema = mongoose.Schema({
    id: String,
    nickname: String,
});

const model = new mongoose.model('Orders', schema);

module.exports = model;