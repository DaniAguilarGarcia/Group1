const mongoose = require('mongoose');

/**
 * @typedef {Object} Books
 * @property {string} authors
 * @property {number} year
 * @property {string} title
 * @property {number} average_rating
 * @property {number} price
 * @property {string} image_url
 * @property {string} small_image_url
 * @property {Boolean} inCart
 */

const bookSchema = new mongoose.Schema({
    authors: String,
    year: Number,
    title: String,
    average_rating : Number,
    price: Number, 
    image_url :String,
    small_image_url: String,
    inCart: Boolean
});

module.exports = new mongoose.model('books', bookSchema);
