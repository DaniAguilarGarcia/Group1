const mongoose = require('mongoose');
const Address = require('./address');
const PaymentMethod = require('./payment_method');
const Password = require('../utils/password');
const emailValidator = require('email-validator');

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
        required: [true, 'You must provide a nickname'],
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
            message: 'The password your provided was too easy to guess',
        },
        required: [true, 'You must provide a password'],
    },
    shipping_addresses: [Address],
    payment_methods: [PaymentMethod],
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    },
});

schema.pre('save', function (next) {
    // password hashing
    if (this.password && this.isModified('password')) {
        this.password = Password.hash(this.password);
    }
    next();
});

const model = new mongoose.model('User', schema);

module.exports = model;