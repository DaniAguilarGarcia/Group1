const mongoose = require('mongoose');
const Address = require('./address');
const uuid = require('uuid/v4');
const card_validator = require('card-validator');

/**
 * @typedef {Object} PaymentMethod
 * @property {string} alias
 * @property {string} token
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
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  address: Address,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

const preInsertHook = (context) => {
  if (context.pan) {
    context.last_four = context.pan.substr(-4);
    context.brand = card_validator.number(context.pan).card.type;
    context.token = uuid(); // simulate tokenization
    context.pan = undefined; // don't store pan
  }
  context.cvv = undefined; // don't store cvv
}

schema.pre('updateOne', function (next) {
  preInsertHook(this._update.$set);
  next();
});

schema.pre('save', function (next) {
  preInsertHook(this);
  next();
});

const model = new mongoose.model('Method', schema);

module.exports = model;
