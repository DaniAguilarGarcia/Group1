const User = require('../models/user');

// @todo: document Promise return types

/**
 * @param {Object} data @todo document user model
 * @return {Promise}
 */
const create = (data) => {
    const new_user = new User(data);
    return new_user.save();
};

/**
 * @param {string} _id
 * @return {Promise}
 */
const findById = (_id) => {
    return User.find({ _id });
};

/**
 * @param {string} _id
 * @return {Promise}
 */
const findByEmail = (email) => {
    return User.find({ email });
};

/**
 * @param {string} _id
 * @param {Object} data @todo document user model
 * @return {Promise}
 */
const update = (_id, data) => {
    return User.updateOne({ _id }, data);
};

/**
 * @param {string} _id
 * @return {Promise}
 */
const _delete = (_id) => {
    return User.deleteOne({ _id });
};

module.exports = {
    create,
    findById,
    findByEmail,
    update,
    delete: _delete,
};
