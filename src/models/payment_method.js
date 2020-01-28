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

schema.pre('save', function(next) {
    // cc tokenization
    if (this.pan && this.isModified('pan')) {
        this.last_four = this.pan.substr(-4);
        const result = card_validator.number(this.pan);
        this.brand = result.card.type;
        this.pan = uuid(); // simulate tokenization
    }
    next();
});

module.exports = schema;
