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
    street: {
      type: String,
      required: [true, 'You must provide a street address'],
    },
    city: {
      type: String,
      required: [true, 'You must provide a city'],
    },
    state: {
      type: String,
      required: [true, 'You must provide a state'],
    },
    postal: {
      type: String,
      required: [true, 'You must provide a postal number'],
    },
    country: {
      type: String,
      required: [true, 'You must provide a country'],
    },
});

module.exports = schema;
