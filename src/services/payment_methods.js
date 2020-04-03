const Method = require('../models/payment_method');

/**
 * @param {import('../models/user').User} user
 * @param {Object} data
 * @return {Promise<import('../models/payment_method').PaymentMethod>}
 */
const create = async (user, data) => {
  try {
    const method = new Method({user_id: user._id, ...data});
    await method.save();
    user.payment_methods.push(method);
    await user.save();
    return method;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};

/**
 * @param {import('../models/user').User} user
 * @param {string} _id
 * @return {Promise<import('../models/payment_method').PaymentMethod>}
 */
const findById = async (user, _id) => {
  return await Method.findOne({ _id, user_id: user._id });
};

/**
 * @param {import('../models/user').User} user
 * @param {string} _id
 * @return {Promise<import('../models/payment_method').PaymentMethod>}
 */
const update = async (user, _id, data) => {
  const method = await findById(user, _id);
  Object.assign(method, data);
  await method.save();
  return method;
};

/**
 * @param {import('../models/user').User} user
 * @param {string} _id
 * @return {Promise<{ok: boolean, deletedCount: number, n: number}>}
 */
const _delete = async (user, _id) => {
  await Method.deleteOne({_id, user_id: user._id});
  await user.payment_methods.pull(_id);
  await user.save();
};

module.exports = {
  create,
  findById,
  update,
  delete: _delete,
};
