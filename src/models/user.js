const mongoose = require('mongoose');
const Address = require('./address');
const { schema: PaymentMethod } = require('./payment_method');
const Password = require('../utils/password');
const emailValidator = require('email-validator');

/**
 * @typedef {Object} User
 * @property {string} username
 * @property {string} name
 * @property {string} nickname
 * @property {string} email
 * @property {string} password hashed
 * @property {import('./address').Address[]} shipping_addresses
 * @property {import('./payment_method').PaymentMethod[]} payment_methods
 * @property {Date} created_at
 * @property {Date} updated_at
 */

const schema = new mongoose.Schema({
    username: {
        type: String,
        maxlength: [32, 'Your username can not be more than 32 characters'],
        minlength: [3, 'Your username must be at least 3 characters'],
        required: [true, 'You must provide a username'],
        unique: [true, 'This username is already taken'],
    },
    name: {
        type: String,
        maxlength: [32, 'Your name can not be more than 32 characters'],
        minlength: [3, 'Your name must be at least 3 characters'],
        required: [true, 'You must provide a name'],
    },
    nickname: {
        type: String,
        maxlength: [32, 'Your nickname can not be more than 32 characters'],
        minlength: [3, 'Your nickname must be at least 3 characters'],
    },
    email: {
        type: String,
        validate: {
            validator: value => emailValidator.validate(value),
            message: 'The email you provided is invalid',
        },
        required: [true, 'You must provide an email'],
        unique: [true, 'This email is already taken'],
    },
    password: {
        type: String,
        validate: {
            validator: value => Password.validate(value, 3),
            message: 'The password you provided was too easy to guess',
        },
        required: [true, 'You must provide a password'],
    },
    address: {
        type: Address,
    },
    shipping_addresses: [Address],
    payment_methods: [PaymentMethod],
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    },
});

schema.hidden = [
    'password',
    '__v',
];

schema.pre('updateOne', function (next) {
  if (this._update.$set.password) {
    this._update.$set.password = Password.hash(this._update.$set.password);
  }
  next();
});

schema.pre('save', function (next) {
  if (this.password && this.isModified('password')) {
    this.password = Password.hash(this.password);
  }
  next();
});

schema.methods.toJSON = function() {
    const obj = this.toObject();
    
    schema.hidden.forEach((field) => { // @todo move this and make it recursive
        if (Object.prototype.hasOwnProperty.call(obj, field)) {
            delete obj[field];
        }
    })

    return obj;
};

const model = new mongoose.model('User', schema);

module.exports = model;
