const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({

    id: {type: String},
    title: {type: String},
    publication_date: {type: String},
    author: {type: String},
    publisher: {type: String},
    genre: {type: String},
    img: {type: String},
    info: {type: String},
    quantity: {type: Number},
    average_rating: {type: Number},
    price: {type: Number},
    inCart: {type: Boolean},
    inWishList: {type: Boolean},
    count: {type: Number},
    total: {type: Number},
});

module.exports = new mongoose.model('books', bookSchema);
