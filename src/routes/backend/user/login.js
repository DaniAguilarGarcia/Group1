const passport = require('passport');

module.exports = async (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return res.status(401)
                .send(err);
        }

        req.login(user, (err) => {
            if (err) {
                return res.status(401)
                    .send(err);
            }
            return res.send('logged in');
        });
    })(req, res, next);
}