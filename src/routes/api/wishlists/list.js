const Wishlist = require('../../../models/wishlist');

module.exports = async (req, res) => {
  let wishlists = await Wishlist.find({});

  return res.status(200)
    .send(wishlists);
}