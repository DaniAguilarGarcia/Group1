const Wishlist = require('../../../models/wishlist');

module.exports = async (req, res) => {
    const wishlist = await Wishlist.findById(req.params.wishlistId)

    wishlist.bookIds = wishlist.bookIds.includes(req.body.bookId) ?
        wishlist.bookIds.filter(bookId => bookId !== req.body.bookId) :
        [...wishlist.bookIds, req.body.bookId];

    wishlist
        .save()
        .catch(e => res.status(500).send(e.message))

    res.status(200).send(wishlist);
}