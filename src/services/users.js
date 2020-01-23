const User = require('../models/user');

/**
 * @typedef {Object} User
 * @property {string} username
 * @property {string} name
 * @property {string} nickname
 * @property {string} email
 * @property {string} password hashed
 * @property {Address[]} shipping_addresses
 * @property {PaymentMethod[]} payment_methods
 * @property {Date} created_at
 * @property {Date} updated_at
 */

/**
 * @param {Object} data @todo document user model
 * @return {Promise<User>}
 */
const create = async (data) => {
    const new_user = new User(data);
    return await new_user.save();
};

/**
 * @param {string} _id
 * @return {Promise<User>}
 */
const findById = async (_id) => {
    return await User.findOne({ _id });
};

/**
 * @param {string} _id
 * @return {Promise<User>}
 */
const findByEmail = async (email) => {
    return await User.findOne({ email });
};

/**
 * @param {string} _id
 * @param {User} data
 * @return {Promise<{n: number, nModified: number}>}
 */
const update = async (_id, data) => {
    return await User.updateOne({ _id }, data);
};

/**
 * @param {string} _id
 * @return {Promise<{ok: boolean, deletedCount: number, n: number}>}
 */
const _delete = async (_id) => {
    return await User.deleteOne({ _id });
};

module.exports = {
    create,
    findById,
    findByEmail,
    update,
    delete: _delete,
};
