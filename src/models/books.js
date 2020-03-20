const mongoose = require('mongoose');

/*const schema = new mongoose.Schema({
    isbn: String,
    title: String,
    publication_date : String,
    edition: Number,
    quantity: Number,
    price: Number, 
    author: String, 
    publisher: String,
    genre: String,
    book_description: String,
});*/

const schema = new mongoose.Schema({
    title: String,
    authors: String,
    year: Number,
    price: Number, 
    genre: String,
    book_description: String,
    img_url: String,
    small_image_url: String
});

const model = new mongoose.model('Books', schema);

module.exports = model;