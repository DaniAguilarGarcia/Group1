const Review = require('../models/review');



/**
 * @param {Object} data @todo document user model
 * @return {Promise<import('../models/review').Review>}
 */
const create = async (data) => {
  const new_review = new Review(data);
  try {
    return await new_review.save();
  } catch (error) {
    return console.log(error);
  }
};

/**
 * @param {string} id
 * @return {Promise<import('../models/user').User>}
 */
const findByBookId = async (id) => {
  return await Review.find({ id });
};

module.exports = {
  create,
  findById: findByBookId
};
