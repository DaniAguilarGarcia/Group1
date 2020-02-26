const passport = require('passport');
const Users = require('../../../services/users');

module.exports = async (req, res) => {
    try {
        const user = await Users.create(req.body);
        req.login(user, (err) => {
            if (err) {
                return res.status(401)
                    .send(error_response);
            }
            return res.send(user);
        });
    } catch (error) {
        return res.status(422)
            .send(error);
    }
}