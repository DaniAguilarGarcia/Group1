const Review = require('../models/purchase');

/**
 * @param {Object} data @todo document user model
 * @return {Promise<import('../models/purchase').Purchase>}
 */
const create = async (data) => {
  const new_Purchase = new Purchase(data);
  try {
    return await new_Purchase.save();
  } catch (error) {
    return console.log(error);
  }
};

/**
 * @param {string} id
 * @return {Promise<import('../models/user').User>}
 */
const findByPurchaseId = async (id) => {
  return await Purchase.find({ id });
};

module.exports = {
  create,
  findById: findByPurchaseId
};
