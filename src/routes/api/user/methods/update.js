const Methods = require('../../../../services/payment_methods');

module.exports = async (req, res) => {
  if (!req.isAuthenticated()) {
      return res.status(401)
          .send('you need to log in');
  }

  const { _id } = req.params;

  try {
    const updated = await Methods.update(req.user, _id, req.body);
    return res.status(200)
      .send(updated);
  } catch (error) {
    console.error(error);
    return res.status(422)
        .send(error);
  }
}