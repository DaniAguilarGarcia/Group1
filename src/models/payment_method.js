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
    validate: {
      validator: (value) => {
        return card_validator.number(value).isValid;
      },
      message: 'Please enter a valid credit card number',
    },
  },
  token: String,
  payer_name: String,
  brand: String,
  last_four: String,
  exp: {
    type: String,
    validate: {
      validator: (value) => {
        const result = card_validator.expirationDate(value);
        return result.isPotentiallyValid;
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

schema.pre('save', function (next) {
  if (this.pan) {
    this.last_four = this.pan.substr(-4);
    this.brand = card_validator.number(this.pan).card.type;
    this.token = uuid(); // simulate tokenization
    this.pan = undefined;
  }
  next();
});

const model = new mongoose.model('Method', schema);

module.exports = {
  schema,
  model
};
