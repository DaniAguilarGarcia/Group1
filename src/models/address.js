const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    street: String,
    city: String,
    state: String,
    postal: String,
    country: String,
});

module.exports = schema;
