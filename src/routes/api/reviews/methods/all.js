const Review = require('../../../../services/reviews');

module.exports = async (req, res) => {

  const { id } = req.params;

  let reviews = await Review.findById(id);

  return res.status(200)
    .send(reviews);
}