const Review = require('../models/orders');

/**
 * @param {Object} data @todo document user model
 * @return {Promise<import('../models/orders').Orders>}
 */
const create = async (data) => {
  const new_Orders = new Orders(data);
  try {
    return await new_Orders.save();
  } catch (error) {
    return console.log(error);
  }
};

/**
 * @param {string} id
 * @return {Promise<import('../models/user').User>}
 */
const findByPurchaseId = async (id) => {
  return await Orders.find({ id });
};

module.exports = {
  create,
  findById: findByPurchaseId
};
