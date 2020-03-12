
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
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
});

const model = new mongoose.model('Books', schema);

module.exports = model;