const User = require('../models/user');

/**
 * @param {Object} data @todo document user model
 * @return {Promise<import('../models/user').User>}
 */
const create = async (data) => {
    const new_user = new User(data);
    try {
        return await new_user.save();
    } catch (error) {
        /**
         * Handle 'unique' validation
         * only username on User model is 'unique'
         * @see https://mongoosejs.com/docs/validation.html#the-unique-option-is-not-a-validator
         */
        if (error.message.indexOf('duplicate key error') !== -1) {
            return Promise.reject({
                _message: 'User validation failed',
                errors: {
                    username: {
                        message: 'That username is already taken',
                    },
                },
            });
        }
        return Promise.reject(error);
    }
};

/**
 * @param {string} _id
 * @return {Promise<import('../models/user').User>}
 */
const findById = async (_id) => {
    return await User.findOne({ _id });
};

/**
 * @param {string} _id
 * @return {Promise<import('../models/user').User>}
 */
const findByEmail = async (email) => {
    return await User.findOne({ email });
};

/**
 * @param {string} username
 * @return {Promise<import('../models/user').User>}
 */
const findByUsername = async (username) => {
    return await User.findOne({ username });
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
    findByUsername,
    update,
    delete: _delete,
};
