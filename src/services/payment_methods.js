const { model:Method } = require('../models/payment_method');

/**
 * @param {import('../models/user').User} user
 * @param {Object} data
 * @return {Promise<import('../models/payment_method').PaymentMethod>}
 */
const create = async (user, data) => {
  try {
    user.payment_methods.push(new Method(data));
    await user.save();
    return user.payment_methods[user.payment_methods.length - 1];
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};

/**
 * @param {import('../models/user').User} user
 * @param {string} _id
 * @return {Promise<import('../models/payment_method').PaymentMethod>}
 */
const findById = async (user, _id) => {
  return await user.payment_methods.id(_id);
};

/**
 * @param {string} _id
 * @return {Promise<{ok: boolean, deletedCount: number, n: number}>}
 */
const _delete = async (user, _id) => {
  await user.payment_methods.id(_id).remove();
  await user.save();
};

module.exports = {
  create,
  findById,
  delete: _delete,
};
