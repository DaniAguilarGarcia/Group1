const mongoose = require('mongoose');

/**
 * @typedef {Object} Address
 * @property {string} street
 * @property {string} city
 * @property {string} state
 * @property {string} postal
 * @property {string} country
 */

const schema = new mongoose.Schema({
    street: String,
    city: String,
    state: String,
    postal: String,
    country: String,
});

module.exports = schema;
