const passport = require('passport');

module.exports = async (req, res, next) => {
    if (!req.isAuthenticated()) {
        return res.status(401)
            .send('you need to log in');
    }
    return res.send(req.user.toJSON());
}