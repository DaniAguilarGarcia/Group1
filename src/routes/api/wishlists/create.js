const Wishlist = require('../../../models/wishlist');

module.exports = async (req, res) => {
    const userWishlistCount = await Wishlist.count({ userId: req.body.userId })

    if (userWishlistCount < 3) {
        const wishlist = await new Wishlist({
            title: req.body.title,
            userId: req.body.userId
        })
        .save()
        .catch(e => res.status(500).send(e.message))

        return res.status(200).send(wishlist);
    } else {
        res.status(400).send(`Can only create 3 wishlists`)
    }
}