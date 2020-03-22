const passport = require('passport');
const Users = require('../../../services/users');

module.exports = async (req, res, next) => {
    if (!req.isAuthenticated()) {
        return res.status(401)
            .send('you need to log in');
    }

    await Users.update(req.user._id, req.body);

    const updated = await Users.findById(req.user._id);

    return res.send(updated.toJSON());
}