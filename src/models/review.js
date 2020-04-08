const mongoose = require('mongoose');

/**
 * @typedef {Object} Review
 * @property {string} title
 * @property {integer} rating
 * @property {string} comment
 * @property {string} id
 * @property {string} nickname
 */

const schema = mongoose.Schema({
    title: String,
    rating: Number,
    comment: String,
    id: String,
    nickname: String,
});

const model = new mongoose.model('Review', schema);

module.exports = model;