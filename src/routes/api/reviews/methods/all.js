const Review = require('../../../../services/reviews');

module.exports = async (req, res) => {
  if (!req.isAuthenticated()) {
      return res.status(401)
          .send('you need to log in');
  }

  const { id } = req.params;

  let reviews = await Review.findById(id);

  return res.status(200)
    .send(reviews);
}