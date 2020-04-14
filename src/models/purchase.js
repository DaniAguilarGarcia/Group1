const mongoose = require('mongoose');

/**
 * @typedef {Object} Purchase
 * @property {string} id
 * @property {string} nickname
 */

const schema = mongoose.Schema({
    id: String,
    nickname: String,
});

const model = new mongoose.model('Purchase', schema);

module.exports = model;