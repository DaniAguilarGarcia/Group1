const Wishlist = require('../../../models/wishlist');

module.exports = async (req, res) => {
  const wishlists = await Wishlist.findById(req.params.wishlistId);

  return res.status(200)
    .send(wishlists);
}