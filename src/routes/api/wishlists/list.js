const Wishlist = require('../../../models/wishlist');

module.exports = async (req, res) => {
  const wishlists = await Wishlist.find({
    userId: req.body.userId
  });

  res.status(200).send(wishlists);
}