const mongoose = require('mongoose');

/**
 * @typedef {Object} authors
 * @property {string} author_name
 * @property {string} auhtor_bio
 * 
 */

 //Schema
const authorSchema = new mongoose.Schema({
    name: { 
        type: String, 
    },
    author_bio: {
        type: String
    },
    books: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'Books' }
    ]
  }, {
    timestamps: true
});

//Model
module.exports = mongoose.model('Authors', authorSchema);
