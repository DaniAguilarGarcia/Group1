const passport = require('passport');

module.exports = async (req, res, next) => {
  req.logout();
  return res.send().status(200);
}