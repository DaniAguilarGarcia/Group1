const Methods = require('../../../../services/payment_methods');

module.exports = async (req, res) => {
  if (!req.isAuthenticated()) {
      return res.status(401)
          .send('you need to log in');
  }

  const { _id } = req.params;

  await Methods.delete(req.user, _id);

  return res.status(204)
    .send('deleted');
}