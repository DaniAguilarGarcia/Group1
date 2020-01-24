const passport = require('passport');

module.exports = async (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        req.login(user, (err) => {
            if (err) {
                return res.send(err);
            }
            return res.send('logged in');
        })
    })(req, res, next);
}