const passport = require('passport');

module.exports = async (req, res, next) => {

    const error_response = {
        message: 'Your email or password was incorrect.',
    };

    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return res.status(401)
                .send(error_response);
        }

        req.login(user, (err) => {
            if (err) {
                return res.status(401)
                    .send(error_response);
            }
            return res.send(user);
        });
    })(req, res, next);
}