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
 * @property {Boolean} inWishList
 */

 //Schema
const bookSchema = new mongoose.Schema({
    id: String,
    title: String,
    publication_date: String,
    author: String,
    publisher: String,
    img: String,
    info : String, 
    genre : String,
    quantity : Number,
    average_rating : Number,
    price: Number, 
    inCart: Boolean,
    inWishList : Boolean,
    count: Number, 
    total: Number,
    author_bio: String
});

//Model
module.exports = mongoose.model('Books', bookSchema);
