const mongoose = require('mongoose');

/**
 * @typedef {Object} Wishlist
 * @property {string} title
 */

const schema = new mongoose.Schema({
  title: String
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

const model = new mongoose.model('Wishlist', schema);

module.exports = model;
