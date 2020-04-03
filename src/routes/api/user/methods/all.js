const Method = require('../../../../models/payment_method');

module.exports = async (req, res) => {
  if (!req.isAuthenticated()) {
      return res.status(401)
          .send('you need to log in');
  }

  let methods = await Method.find({_id: {$in: req.user.payment_methods}});

  return res.status(200)
    .send(methods);
}