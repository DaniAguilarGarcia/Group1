const mongoose = require('mongoose');
const Address = require('./address');
const uuid = require('uuid/v4');
const card_validator = require('card-validator');

/**
 * @typedef {Object} PaymentMethod
 * @property {string} alias
 * @property {string} pan
 * @property {string} payer_name
 * @property {string} brand
 * @property {string} last_four
 * @property {string} exp
 * @property {import('./address').Address} address
 */

const schema = new mongoose.Schema({
    alias: String,
    pan: {
        type: String,
        validator: {
            validate: (value) => {
                const result = card_validator.number(value);
                return result.isValid;
            },
            message: 'Please enter a valid credit card number',
        },
        required: true,
    },
    payer_name: String,
    brand: String,
    last_four: String,
    exp: {
        type: String,
        validator: {
            validate: (value) => {
                const result = card_validator.expirationDate(value);
                return result.isValid;
            },
            message: 'The expiration is invalid',
        },
        required: true,
    },
    address: Address,
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    },
});

function tokenMiddleware(doc) {
  if (doc.pan && doc.isModified('pan')) {
    doc.last_four = doc.pan.substr(-4);
    const result = card_validator.number(doc.pan);
    doc.brand = result.card.type;
    doc.pan = uuid(); // simulate tokenization
  }
}

schema.pre('updateOne', function(next) {
    tokenMiddleware(this);
    next();
});

schema.pre('save', function(next) {
    tokenMiddleware(this);
    next();
});

module.exports = schema;
