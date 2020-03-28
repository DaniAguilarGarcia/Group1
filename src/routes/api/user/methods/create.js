const Methods = require('../../../../services/payment_methods');

module.exports = async (req, res) => {
  if (!req.isAuthenticated()) {
      return res.status(401)
          .send('you need to log in');
  }

  let method;
  
  try {
    method = await Methods.create(req.user, req.body);
  } catch (error) {
    return res.status(422)
        .send(error);
  }

  return res.status(201)
    .send(method);
}